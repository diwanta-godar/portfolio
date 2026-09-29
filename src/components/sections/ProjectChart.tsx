import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'

type ProjectChartProps = {
  data: { name: string; value: number }[]
  title?: string
}

export function ProjectChart({ data, title = 'Key metric trend' }: ProjectChartProps) {
  return (
    <div className="h-64 w-full min-w-0 sm:h-72">
      <p className="mb-3 text-sm font-medium text-muted-foreground">{title}</p>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 8, right: 8, left: -16, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" className="stroke-border/60" vertical={false} />
          <XAxis
            dataKey="name"
            tick={{ fontSize: 12 }}
            tickLine={false}
            axisLine={false}
            interval="preserveStartEnd"
          />
          <YAxis tick={{ fontSize: 12 }} tickLine={false} axisLine={false} width={32} />
          <Tooltip
            contentStyle={{
              borderRadius: '0.5rem',
              border: '1px solid var(--border)',
              background: 'var(--popover)',
            }}
          />
          <Bar dataKey="value" fill="var(--chart-2)" radius={[4, 4, 0, 0]} maxBarSize={48} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
