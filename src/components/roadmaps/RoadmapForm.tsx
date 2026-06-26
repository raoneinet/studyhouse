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
import { Map } from "lucide-react";
import { useTranslations } from "next-intl";

const getFormSchema = (t: any) => z.object({
    goal: z.string().trim().min(2, t('minGoalErr')),
    title: z.string().trim().min(2, t('minTitleErr')),
    description: z.string().optional(),
});

export function RoadmapForm() {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const t = useTranslations('Roadmaps');
    const formSchema = getFormSchema(t);

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
                toast.error(data.message || t('errorCreating'));
                return;
            }

            toast.success(t('successCreating'));
            router.push(`/roadmaps/${data.roadmap.id}`);
        } catch (error) {
            console.error("Form error:", error);
            toast.error(t('unexpectedError'));
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <div className="bg-white rounded-2xl shadow-sm border p-6 md:p-8 max-w-2xl mx-auto mt-6">
            <div className="flex items-center gap-2 mb-6">
                <Map className="text-orange-500" size={24} />
                <h2 className="text-2xl font-bold text-slate-800">{t('createNewRoadmap')}</h2>
            </div>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <FormField
                            control={form.control}
                            name="goal"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-slate-700 font-medium">{t('formGoal')}</FormLabel>
                                    <FormControl>
                                        <Input className="h-11 rounded-xl" placeholder={t('formGoalPlaceholder')} {...field} />
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
                                <FormLabel className="text-slate-700 font-medium">{t('formTitle')}</FormLabel>
                                <FormControl>
                                    <Input className="h-11 rounded-xl" placeholder={t('formTitlePlaceholder')} {...field} />
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
                                <FormLabel className="text-slate-700 font-medium">{t('formDesc')}</FormLabel>
                                <FormControl>
                                    <Textarea
                                        placeholder={t('formDescPlaceholder')}
                                        className="resize-y rounded-xl min-h-[120px]"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <div className="flex flex-col sm:flex-row justify-end gap-4 pt-4">
                        <Button
                            type="button"
                            variant="outline"
                            className="h-12 px-8 rounded-xl font-medium"
                            onClick={() => router.back()}
                            disabled={isLoading}
                        >
                            {t('cancel')}
                        </Button>
                        <Button 
                            type="submit" 
                            className="h-12 px-10 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold shadow-md transition-colors"
                            disabled={isLoading}
                        >
                            {isLoading ? t('creating') : t('createRoadmapBtn')}
                        </Button>
                    </div>
                </form>
            </Form>
        </div>
    );
}
