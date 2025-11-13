import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip, BarChart, Bar, XAxis, YAxis, CartesianGrid } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { formatCurrency } from '@/utils/format';


const statistics = {
  totalSpent: 494.38,
  totalReceived: 4375.00,
  balance: 3880.62,
  categories: [
    { name: "Alimentação", total: 190.90, icon: "🍔", color: "#FF6B6B" },
    { name: "Transporte", total: 203.59, icon: "🚗", color: "#4ECDC4" },
    { name: "Lazer", total: 54.99, icon: "🎮", color: "#95E1D3" },
    { name: "Saúde", total: 49.90, icon: "💊", color: "#F38181" }
  ],
  topCategory: {
    name: "Transporte",
    total: 203.59,
    icon: "🚗",
    color: "#4ECDC4"
  }
};

export function CategoryBarChart() {
  const data = statistics.categories.map(cat => ({
    name: cat.icon + ' ' + cat.name,
    total: cat.total,
    color: cat.color
  }));

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 rounded-lg shadow-lg border">
          <p className="font-semibold">{payload[0].payload.name}</p>
          <p className="text-sm text-zinc-600">{formatCurrency(payload[0].value)}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Comparativo de Gastos</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-4">
          <div className="grid grid-cols-3 gap-4 mb-4">
            <div className="bg-red-50 p-4 rounded-lg">
              <p className="text-xs text-zinc-600 mb-1">Gasto</p>
              <p className="text-xs font-bold text-red-600">{formatCurrency(statistics.totalSpent)}</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <p className="text-xs text-zinc-600 mb-1">Recebido</p>
              <p className="text-xs font-bold text-green-600">{formatCurrency(statistics.totalReceived)}</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-xs text-zinc-600 mb-1">Saldo</p>
              <p className="text-xs font-bold text-blue-600">{formatCurrency(statistics.balance)}</p>
            </div>
          </div>

          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis 
                  dataKey="name" 
                  tick={{ fontSize: 12 }}
                  angle={-45}
                  textAnchor="end"
                  height={80}
                />
                <YAxis 
                  tick={{ fontSize: 12 }}
                  tickFormatter={(value) => `R$ ${value}`}
                />
                <Tooltip content={<CustomTooltip />} />
                <Bar dataKey="total" radius={[8, 8, 0, 0]}>
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-zinc-50 p-4 rounded-lg">
            <p className="text-sm text-zinc-600 mb-2">Categoria com mais gastos</p>
            <div className="flex items-center gap-2">
              <span className="text-2xl">{statistics.topCategory.icon}</span>
              <div>
                <p className="font-semibold">{statistics.topCategory.name}</p>
                <p className="text-sm text-zinc-600">{formatCurrency(statistics.topCategory.total)}</p>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}