import { formatCurrency, formatDate } from "@/utils/format";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

type Category = {
    id: number;
    name: string;
    icon: string;
    color: string;
};

const categories = [
    { id: 1, name: 'Alimentação', icon: '🍔', color: '#FF6B6B' },
    { id: 2, name: 'Transporte', icon: '🚗', color: '#4ECDC4' },
    { id: 3, name: 'Lazer', icon: '🎮', color: '#95E1D3' },
    { id: 4, name: 'Saúde', icon: '💊', color: '#F38181' },
    { id: 5, name: 'Educação', icon: '📚', color: '#AA96DA' },
];

const transactions = [
    { id: 1, name: 'Almoço no restaurante', value: 25.00, type: 'DEPOSIT', categoryId: 1, createdAt: '2024-11-01T10:30:00' },
    { id: 2, name: 'Supermercado Carrefour', value: 153.40, type: 'WITHDRAW', categoryId: 1, createdAt: '2024-11-03T14:15:00' },
    { id: 3, name: 'Uber centro', value: 23.59, type: 'WITHDRAW', categoryId: 2, createdAt: '2024-11-05T09:45:00' },
    { id: 4, name: 'Assinatura Netflix', value: 9.99, type: 'WITHDRAW', categoryId: 3, createdAt: '2024-11-07T16:20:00' },
    { id: 5, name: 'Remédios farmácia', value: 49.90, type: 'WITHDRAW', categoryId: 4, createdAt: '2024-11-10T11:00:00' },
    { id: 6, name: 'Salário mensal', value: 3500.00, type: 'DEPOSIT', categoryId: 5, createdAt: '2024-11-01T08:00:00' },
    { id: 7, name: 'Gasolina posto', value: 180.00, type: 'WITHDRAW', categoryId: 2, createdAt: '2024-11-06T17:30:00' },
    { id: 8, name: 'Cinema com amigos', value: 45.00, type: 'WITHDRAW', categoryId: 3, createdAt: '2024-11-08T19:00:00' },
    { id: 9, name: 'Freelance projeto', value: 850.00, type: 'DEPOSIT', categoryId: 5, createdAt: '2024-11-09T14:00:00' },
    { id: 10, name: 'Padaria café da manhã', value: 12.50, type: 'WITHDRAW', categoryId: 1, createdAt: '2024-11-11T07:15:00' },
];

export default function CardTransactionList() {
    function getCategory(id: number) : Category | undefined {
        return categories.find(category => category.id === id);
    }

    return (
        <Card>
            <CardHeader>
                <CardTitle>Ultimas transações</CardTitle>
            </CardHeader>
            <CardContent>
                {
                    transactions.map((transaction) => (
                        <div key={transaction.id} className="flex justify-between mb-4">
                            <div className="flex items-center gap-2">
                                <div className="w-10 h-10 flex justify-center items-center bg-zinc-100 rounded-md">
                                    <p>{getCategory(transaction.categoryId)?.icon}</p>
                                </div>
                                <div className="">
                                    <p className="text-sm lg:text-md w-10/12 lg:w-auto truncate">{transaction.name}</p>
                                    <p className="text-xs text-zinc-500">{formatDate(transaction.createdAt)}</p>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <p className={`text-xs lg:text-md ${transaction.type === 'WITHDRAW' ? 'text-red-500' : 'text-green-500'}`}>{
                                    (transaction.type === 'WITHDRAW' ? '- ' : '+ ')  +
                                    formatCurrency(transaction.value)
                                }</p>
                            </div>
                        </div>
                    ))
                }
            </CardContent>
        </Card>
    );
}