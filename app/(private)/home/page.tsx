'use client'
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Eye, EyeClosed, PlusCircle, TrendingDown, TrendingUp, Wallet } from "lucide-react";
import { useState } from "react";

export default function HomePage() {
    const [viewBalance, setViewbalance] = useState(false);
    return (
        <section className="p-5 pt-20 bg-zinc-50">
            <div className="flex flex-col lg:flex-row gap-5">
                <div className="w-full lg:w-6/12 gap-5 flex flex-col">
                    <Card className="bg-[#55B02E20]">
                        <CardHeader>
                            <CardTitle className="flex justify-between">
                                <div className="flex items-center gap-2">
                                    <Wallet />
                                    Saldo Atual
                                    {
                                        !viewBalance ? <Eye onClick={() => setViewbalance(true)} /> : <EyeClosed onClick={() => setViewbalance(false)} />
                                    }
                                </div>
                                <Button>
                                    <PlusCircle />
                                    Transação
                                </Button>
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="flex items-center justify-between">
                            <p className="text-3xl text-green-700">
                                {
                                    viewBalance ? 'R$ 2.500,00' : '--'
                                }
                            </p>
                        </CardContent>
                    </Card>
                    <div className="flex gap-2">
                        <Card className="w-6/12">
                            <CardContent className="space-y-2">
                                <CardTitle className="flex items-center gap-2">
                                    <TrendingUp className="bg-[#55B02E40] p-1 w-7 h-7 rounded-md" color="#55B02E" />
                                    Receita
                                </CardTitle>
                                <p className="text-xl font-medium">
                                    R$ 4.000,00
                                </p>
                            </CardContent>
                        </Card>
                        <Card className="w-6/12">
                            <CardContent className="space-y-2">
                                <CardTitle className="flex items-center gap-2">
                                    <TrendingDown className="bg-[#F6352E40] p-1 w-7 h-7 rounded-md" color="#F6352E" />
                                    Despesas
                                </CardTitle>
                                <p className="text-xl font-medium">
                                    R$ 1.500,00
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
                <div className="w-full lg:w-6/12">
                    <Card >

                    </Card>
                </div>
            </div>
        </section>
    );
}