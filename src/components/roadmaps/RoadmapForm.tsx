"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const formSchema = z.object({
    goal: z.string().trim().min(2, "A meta deve ter no mínimo 2 caracteres"),
    title: z.string().trim().min(2, "O título deve ter no mínimo 2 caracteres"),
    description: z.string().optional(),
});

export function RoadmapForm() {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            goal: "",
            title: "",
            description: "",
        },
    });

    async function onSubmit(values: z.infer<typeof formSchema>) {
        setIsLoading(true);
        try {
            const response = await fetch("/api/roadmaps", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(values),
            });

            const data = await response.json();

            if (!response.ok) {
                toast.error(data.message || "Erro ao criar roadmap");
                return;
            }

            toast.success("Roadmap criado com sucesso!");
            router.push(`/roadmaps/${data.roadmap.id}`);
        } catch (error) {
            console.error("Form error:", error);
            toast.error("Ocorreu um erro inesperado");
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <div className="bg-card text-card-foreground p-6 rounded-lg shadow-sm border border-border max-w-2xl mx-auto mt-6">
            <h2 className="text-2xl font-bold mb-6">Criar Novo Roadmap</h2>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                        control={form.control}
                        name="goal"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Meta (ex: ENEM, Concurso Banco do Brasil, Vestibular USP)</FormLabel>
                                <FormControl>
                                    <Input placeholder="Qual o objetivo deste roadmap?" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    
                    <FormField
                        control={form.control}
                        name="title"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Título</FormLabel>
                                <FormControl>
                                    <Input placeholder="Dê um nome para o seu roadmap" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="description"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Descrição (Opcional)</FormLabel>
                                <FormControl>
                                    <Textarea
                                        placeholder="Detalhes adicionais sobre sua jornada..."
                                        className="resize-none"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <div className="flex justify-end gap-3">
                        <Button
                            type="button"
                            variant="outline"
                            onClick={() => router.back()}
                            disabled={isLoading}
                        >
                            Cancelar
                        </Button>
                        <Button type="submit" disabled={isLoading}>
                            {isLoading ? "Criando..." : "Criar Roadmap"}
                        </Button>
                    </div>
                </form>
            </Form>
        </div>
    );
}
