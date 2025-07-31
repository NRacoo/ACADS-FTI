"use client"

import { Brain, Coffee, Timer } from "lucide-react";
import { isNull } from "node:util";
import { useEffect, useRef, useState } from "react";

type timerMode = "work" | "shortBreak" | "longBreak"

interface TimerSettings{
    work:number;
    shortBreak:number;
    longBreak:number;
}

export default function PomoTimer() {
    const [mode, setMode] = useState<timerMode>("work");
    const [timerLeft, setTimerLeft] = useState(25*60);
    const [isRunning, setIsRunning] = useState(false);
    const [sessions, setSessions] = useState(0);
    const [settings, setSettings] = useState<TimerSettings>({
        work:25,
        shortBreak:5,
        longBreak:15
    })

    const [soundEnabled, setSoundEnabled] = useState(true);
    const intervalref = useRef<NodeJS.Timeout | null>(null);

    const modeConfig = {
        work: {
            label:"Focus Time",
            icon: Brain,
            color:"bg-red-500",
            bgGradient:"from-red-500 to-pink-600",
            duration: settings.work * 60,
        },
        shortBreak:{
            label:"Short Break",
            icon: Coffee,
            color: "bg-green-500",
            bgGradient:"from-green-500 to-emerald-600",
            duration: settings.shortBreak * 60,
       },
       longBreak: {
        label: "Long Break",
        icon: Timer,
        color: "bg-sky-400",
        bgGradient:"from-sky-400 to-indigo-600",
        duration: settings.longBreak * 60,
       }

    };

    const playNotificationSound = () => {
        const audioContext = new (window.AudioContext || (window as any ).webkitAudioContext())
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();

        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination)

        oscillator.frequency.value = 800;
        oscillator.type = "sine";

        gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);

        oscillator.start(audioContext.currentTime);
        oscillator.stop (audioContext.currentTime + 0.5);
    }

    const handleTimerComplete = () => {
        setIsRunning(false);
        if(mode === "work"){
            setSessions((prev) => prev + 1);
            const nextMode = sessions > 0 && (sessions + 1) % 4 === 0 ? "longBreak" : "shortBreak"
            setMode(nextMode)
            setTimerLeft(modeConfig[nextMode].duration)
        }else{
            setMode("work");
            setTimerLeft(modeConfig.work.duration);
        }

        if(soundEnabled){
            playNotificationSound()
        }
    }

    useEffect(() => {
        if(isRunning && timerLeft > 0){
            intervalref.current = setInterval (() => {
                setTimerLeft((prev) => prev - 1);
            }, 1000)
        }else if(timerLeft === 0){
            handleTimerComplete()
        }else{
            if(intervalref.current){
             clearInterval(intervalref.current);
            }
        }

        return () => {
            if(intervalref.current){
                clearInterval(intervalref.current)
            }
        }

        
    }, [isRunning, timerLeft])

    const toggleTimer = () => {
        setIsRunning(!isRunning)
    }

    const resetTimer = () => {
        setIsRunning(false);
        setTimerLeft(modeConfig[mode].duration);
    }

    const switchMode = (newMode : timerMode) => {
        setMode(newMode);
        setTimerLeft(modeConfig[mode].duration);
        setIsRunning(false);
    }

    const updateSettings = (newSettings : TimerSettings) => {
        setSettings(newSettings);
        setTimerLeft(newSettings[mode] * 60)
        setIsRunning(false);

    } 

    const formatTime = (seconds : number) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
    }

    const progress = ((modeConfig[mode].duration - timerLeft) / modeConfig[mode].duration) * 100
    
    const currConfig = modeConfig[mode];

    const IconComponent = currConfig.icon

    return(
        <div className={`min-h-screen bg-gradient-to-br ${currConfig.bgGradient} p-4 transition-all duration-1000 py-20 `}>
            <div className="max-w-md mx-auto space-y-6">
                <div className="text-center text-white dark:text-white space-y-2">
                    <h1 className="font-bold">Pomodoro Timer</h1>
                    <p className="font-second ">Stay Focus</p>
                </div>

                {/*Mode Select */}
                <div className="flex gap-2 p-1 bg-white/20 rounded-lg backdrop-blur-sm">
                    {(Object.keys(modeConfig) as timerMode[]).map((modeKey) => {
                        const config = modeConfig[modeKey]
                        const ModeIcon = config.icon
                        
                        return (
                            <button
                            key={modeKey}
                            onClick = {() => switchMode(modeKey)}
                             className={`flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-md text-sm font-medium transition-all
                             ${mode === modeKey ? "bg-white text-gray-600" : "text-white/80 hover:text-white hover:ng-white/10"}`}>
                            <ModeIcon className="w-4 h-4"/>
                            <span className="hidden sm:inline">{config.label}</span>
                            
                            </button>
                        )
                    })}
                </div>
            </div>
            
        </div>
    )
}