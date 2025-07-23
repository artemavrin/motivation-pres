"use client"
import { IconCheck, IconCircleCheckFilled, IconExclamationCircleFilled } from "@tabler/icons-react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";

export const Check = ({ title, checked, className }: { title: string, checked?: boolean, className?: string }) => {
    return (
        <div className={cn("flex gap-1", className)}>
            <div className="size-6 relative">
                <AnimatePresence>
                    {
                        checked && (
                            <motion.div className="absolute left-0 top-0" layout initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0 }} transition={{ duration: 0.2 }}>
                                <IconCircleCheckFilled className="text-green-700" />
                            </motion.div>
                        )
                    }
                </AnimatePresence>
                <AnimatePresence>
                    {
                        !checked && (
                            <motion.div className="absolute left-0 top-0" layout initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0 }} transition={{ duration: 0.5 }}>
                                <IconExclamationCircleFilled className="text-red-700" />
                            </motion.div>
                        )
                    }
                </AnimatePresence>
            </div>

            <span >{title}</span>
        </div>
    )
}
