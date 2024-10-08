"use client"
import { ContentLayout } from "@/components/main/content-layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import Turnstile from "react-turnstile";
import { toast } from "sonner";

const initialFormData = {
    name: '',
    email: '',
    message: '',
    token: ''
}

export default function ContactPage() {
    const [formData, setFormData] = useState(initialFormData);

    const setValue = (k: any, v: any) => {
        setFormData((oldData) => (
            {
                ...oldData,
                [k]: v
            }
        ))
    }

    const handleSubmit = async () => {
        const endpoint = "/api/contact";
        const submitData = new FormData();
        (Object.keys(formData) as (keyof typeof formData)[]).forEach((k) => {
            submitData.append(k, formData[k]);
        });

        if(!formData.token || formData.name === '' || formData.email === '' || formData.message === '') {
            toast.error("Please fill out all fields and complete the captcha.");
            return;
        }

        try {
            const result = await fetch(endpoint, {
                body: submitData,
                method: 'post'
            });

            const outcome = await result.json();
            toast.success(outcome.message);
        } catch (err) {
            console.error(err);
            toast.error("An error occurred while submitting your message. Please try again later.");
        }
    }

    return (
        <ContentLayout title="Contact Us" subtitle="Get in touch with us" buttons={false}>
            <div className="z-10 flex transition-all duration-200 -translate-y-[10rem] justify-center">
                    <Card className="border-none max-w-[1350px] shadow-lg dark:shadow-white/5 shadow-black/5">
                        <CardHeader>
                            <CardTitle>Get in Touch</CardTitle>
                            <CardDescription className="text-muted-foreground">
                                Fill out the form below and we&apos;ll get back to you as soon as possible.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <form className="space-y-4">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="name">Name</Label>
                                        <Input id="name" placeholder="Enter your name" required/>
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="email">Email</Label>
                                        <Input id="email" type="email" placeholder="Enter your email" required/>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="message">Message</Label>
                                    <Textarea id="message" placeholder="Enter your message" className="min-h-[100px]" required/>
                                </div>
                                <Turnstile
                                    sitekey={"0x4AAAAAAAkiuyyzu9fsM-bC"}
                                    onVerify={(token) => setValue('token', token)}
                                />
                                <Button type="submit" onClick={handleSubmit}>Submit</Button>
                            </form>
                        </CardContent>
                    </Card>
                </div>
        </ContentLayout>
    )
}