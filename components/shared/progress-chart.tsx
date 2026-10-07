import { cn } from '@/lib/utils'

type Point = { label: string; value: number }

type ProgressChartProps = {
  data: Point[]
  title?: string
  className?: string
  min?: number
  max?: number
}

export function ProgressChart({ data, title = 'Accuracy trend', className, min = 40, max = 100 }: ProgressChartProps) {
  const width = 560
  const height = 220
  const padX = 36
  const padTop = 16
  const padBottom = 30
  const innerW = width - padX * 2
  const innerH = height - padTop - padBottom

  const x = (i: number) => padX + (innerW * i) / Math.max(1, data.length - 1)
  const y = (v: number) => padTop + innerH - ((v - min) / (max - min)) * innerH

  const linePath = data.map((p, i) => `${i === 0 ? 'M' : 'L'}${x(i)},${y(p.value)}`).join(' ')
  const areaPath = `${linePath} L${x(data.length - 1)},${padTop + innerH} L${x(0)},${padTop + innerH} Z`
  const gridValues = [min, min + (max - min) / 2, max]
  const last = data[data.length - 1]

  return (
    <figure className={cn('w-full', className)}>
      <svg
        viewBox={`0 0 ${width} ${height}`}
        role="img"
        aria-label={`${title}: ${data.map((d) => `${d.label} ${d.value}%`).join(', ')}`}
        className="h-auto w-full"
      >
        <defs>
          <linearGradient id="chart-area" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="oklch(0.5 0.2 262)" stopOpacity="0.28" />
            <stop offset="100%" stopColor="oklch(0.5 0.2 262)" stopOpacity="0" />
          </linearGradient>
        </defs>
        {gridValues.map((v) => (
          <g key={v}>
            <line
              x1={padX}
              x2={width - padX}
              y1={y(v)}
              y2={y(v)}
              className="stroke-border"
              strokeDasharray="4 4"
            />
            <text x={padX - 8} y={y(v) + 4} textAnchor="end" className="fill-muted-foreground text-[11px]">
              {Math.round(v)}%
            </text>
          </g>
        ))}
        <path d={areaPath} fill="url(#chart-area)" />
        <path d={linePath} fill="none" stroke="oklch(0.5 0.2 262)" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" />
        {data.map((p, i) => (
          <g key={p.label}>
            <circle cx={x(i)} cy={y(p.value)} r={4.5} className="fill-card" stroke="oklch(0.5 0.2 262)" strokeWidth={2.5} />
            <text x={x(i)} y={height - 8} textAnchor="middle" className="fill-muted-foreground text-[11px]">
              {p.label}
            </text>
          </g>
        ))}
        {last ? (
          <g>
            <rect x={x(data.length - 1) - 24} y={y(last.value) - 32} width={48} height={22} rx={6} fill="oklch(0.2 0.055 266)" />
            <text
              x={x(data.length - 1)}
              y={y(last.value) - 17}
              textAnchor="middle"
              className="fill-white text-[11px] font-semibold"
            >
              {last.value}%
            </text>
          </g>
        ) : null}
      </svg>
      <figcaption className="sr-only">{title}</figcaption>
    </figure>
  )
}
