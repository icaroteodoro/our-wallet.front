import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip, BarChart, Bar, XAxis, YAxis, CartesianGrid } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

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

function formatCurrency(value: number): string {
  return value.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  });
}

export function CategoryPieChart() {
  const data = statistics.categories.map(cat => ({
    name: cat.name,
    value: cat.total,
    icon: cat.icon
  }));

  const COLORS = statistics.categories.map(cat => cat.color);

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 rounded-lg shadow-lg border">
          <p className="font-semibold">{payload[0].payload.icon} {payload[0].name}</p>
          <p className="text-sm text-zinc-600">{formatCurrency(payload[0].value)}</p>
        </div>
      );
    }
    return null;
  };

  const renderCustomLabel = (entry: any) => {
    return `${entry.icon}`;
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Gastos por Categoria</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-4">
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={renderCustomLabel}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip content={<CustomTooltip />} />
              </PieChart>
            </ResponsiveContainer>
          </div>
          
          <div className="space-y-2">
            {statistics.categories.map((category, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div 
                    className="w-3 h-3 rounded-full" 
                    style={{ backgroundColor: category.color }}
                  />
                  <span className="text-sm">{category.icon} {category.name}</span>
                </div>
                <span className="text-sm font-semibold">{formatCurrency(category.total)}</span>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
