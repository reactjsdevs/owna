import { Container } from "./container/Container";
import Lottie from "react-lottie";
import { Popup } from "./popup/Popup";
import { Toggle } from "./toggle/Toggle";
import { Button } from "./button/Button";

import * as borrowSlide1 from "../../../../data/lottie/iso up.json";

export const Hero = () => {
  return (
    <Container>
      <div className="py-0 lg:py-32 grid lg:grid-cols-2 gap-4">
        <div className="flex items-center relative z-1 p-3 md:p-8 lg:p-0 lg:order-2">
          <div className="lg:-mt-8">
            <Lottie
              options={{
                loop: true,
                animationData: borrowSlide1,
              }}
              width="100%"
            />
          </div>
        </div>
        <div className="relative z-2 text-center lg:text-left lg:order-1 pt-16 pr-4">
          <h1 className="text-3xl md:text-5xl xl:text-6xl font-display font-bold">
            <span className="block">Pawn real assets.</span>
            <span className="block with-text-gradient">
              Borrow <b>cash</b> and <b>crypto</b> instantly.
            </span>
          </h1>
          <div className="my-8 space-y-5 sm:space-y-0 sm:space-x-8">
            <Popup
              trigger={
                <Button size="lg" as="span">
                  Start
                </Button>
              }
              renderContent={() => (
                <div className="max-w-lg mx-auto">
                  <header className="text-2xl font-bold">
                    To get started please download a wallet.
                  </header>
                  <p className="py-4 text-gray-600">
                    {" "}
                    For security reasons and to ensure proper functioning we
                    recommend the{" "}
                    <a
                      rel="noreferrer"
                      href="https://metamask.io/"
                      target="_blank"
                    >
                      Metamask wallet
                    </a>
                    .<br />
                    <br />
                    Once downloaded, you will be able to connect to the Owna
                    application in the top right corner of your screen.
                  </p>

                  <Toggle
                    title={
                      <div className="font-bold text-gradient">
                        What is a wallet?
                      </div>
                    }
                    renderContent={
                      <div className="text-gray-600">
                        Wallets are used to send, receive, and store digital
                        assets like Ether. Wallets come in many forms. They are
                        either built into your browser, an extension added to
                        your browser, a piece of hardware plugged into your
                        computer or even an app on your phone. For more
                        information about wallets, see this{" "}
                        <a
                          href="https://docs.ethhub.io/using-ethereum/wallets/intro-to-ethereum-wallets/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          explanation
                        </a>
                        .
                      </div>
                    }
                  />
                </div>
              )}
            />
          </div>
        </div>
      </div>
    </Container>
  );
};
