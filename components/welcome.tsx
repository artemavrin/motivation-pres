import { QRCode } from "./ui/kibo-ui/qr-code/server"
import { Voting } from "./voting"
import { StartVoteButton } from "./start-vote-button"

export const Welcome = () => {
    return (
        <div className="flex h-full w-full items-center justify-center gap-40">
            <div className="flex flex-col items-center gap-1">
            <QRCode
                className="size-96 dark:invert"
                data="https://www.haydenbleasel.com/"
                foreground="#000"
                background="#fff"
            />
            <StartVoteButton />
            </div>

            <div className="relative border-border bg-border border-[14px] rounded-[2.5rem] h-[750px] w-[375px] shadow-xl">
                <div className="w-[148px] h-[18px] bg-border top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute"></div>
                <div className="h-[46px] w-[3px] bg-border absolute -start-[17px] top-[124px] rounded-s-lg"></div>
                <div className="h-[46px] w-[3px] bg-border absolute -start-[17px] top-[178px] rounded-s-lg"></div>
                <div className="h-[64px] w-[3px] bg-border absolute -end-[17px] top-[142px] rounded-e-lg"></div>
                <div className="rounded-[2rem] overflow-hidden w-full h-full bg-background flex flex-col items-center justify-center">
                    <Voting />
                </div>
            </div>
        </div>
    )
}