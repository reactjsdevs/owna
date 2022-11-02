import * as React from "react";

import { FAQ, Hero } from "./FrontPageComponents";
import { Container } from "./FrontPageComponents/container/Container";
import { List } from "./FrontPageComponents/list/List";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import Lottie from "react-lottie";
import * as borrowSlide1 from "../../../data/lottie/tokenly.json";

import * as borrowSlide2 from "../../../data/lottie/nexo.json";
import * as borrowSlide3 from "../../../data/lottie/persona.json";

export const Feature = ({ step, title, description, image }) => {
  return (
    <div className="flex flex-col relative text-center max-w-xs md:max-w-md mx-auto border rounded-xl shadow-sm overflow-hidden">
      <img src={image} alt="" className="block w-full bg-black" />

      <div className="bg-white pt-12 flex-1">
        <div className="pt-2">
          <div className="relative z-10 py-6 px-4">
            <span className="text-8xl text-center text-gray-200 font-bold absolute -top-16 lg:-top-9 inset-x-0">
              {step}
            </span>
            <div className="relative">
              <h2 className="font-display  text-lg lg:text-xl  xl:text-2xl font-bold">
                {title}
              </h2>
              <div
                className="mt-2 lg:text-base xl:text-base text-gray-500"
                dangerouslySetInnerHTML={{
                  __html: description,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Spacer = () => <div className="h-4 md:h-10" />;

const Slide = ({ children }) => (
  <div className="h-full flex justify-center items-center">{children}</div>
);

export default function MyHome() {
  const [selected, setSelected] = React.useState(-1);

  return (
    <>
      <Hero />
      <Container>
        <Container.Lame className="md:rounded-3xl bg-gray-50">
          <div className="text-center mb-5 lg:mb-10">
            <h2 className="text-2xl lg:text-5xl font-display font-bold">
              Get your first NFT
              <span className="block with-text-gradient">
                In just an <b>easy</b> steps
              </span>
            </h2>
          </div>
          <div className="grid lg:grid-cols-3 gap-3 text-center">
            <Feature
              step={1}
              title="Schedule appoinment"
              description="Evaluation of your asset and your borrowing capacity"
              image="/images/feature-estimate.png"
            />
            <Feature
              step={2}
              title="Accept estimate"
              description="Issuance of you NFT and loan proposal"
              image="/images/feature-bring.png"
            />
            <Feature
              step={3}
              title="Receive stablecoin"
              description="Borrow Stable coins and USD/EUR"
              image="/images/feature-lend.png"
            />
          </div>
        </Container.Lame>
      </Container>
      <Spacer />
      <Container>
        <Container.Lame className="md:rounded-3xl border-4 border-gray-50">
          <div className="lg:grid lg:grid-cols-2 gap-4">
            <div>
              <h2 className="text-2xl lg:text-5xl font-display font-bold">
                Borrow cash
                <span className="block">or Stablecoins</span>
              </h2>
              <p className="text-lg lg:text-2xl mt-3 text-mainColor">
                Collateralize your crypto and borrow instantly with Owna smart
                contract
              </p>
              <div className="mt-6">
                <List
                  items={[
                    "Interest starting from 2% to 14% APR",
                    "Make daily reimbursement and stop you loan when you want",
                    "Minimum 20% of asset value and a maximum of 70% of asset value",
                    "Automatic approval, no credit check",
                    "100% Private & secured",
                    "Direct Access to DeFi wallet",
                  ]}
                />
              </div>
            </div>
            <div className="lg:-mt-16">
              <Slider
                className="h-full"
                speed={400}
                autoplay
                autoplaySpeed={6000}
                dots={true}
                infinite={true}
                fade
                afterChange={(index) => {
                  setSelected(index);
                }}
              >
                <Slide>
                  <Lottie
                    options={{
                      loop: false,
                      animationData: borrowSlide1,
                    }}
                    isStopped={selected !== 0}
                    width="100%"
                  />
                </Slide>
                <Slide>
                  <Lottie
                    options={{
                      loop: false,
                      animationData: borrowSlide2,
                    }}
                    isStopped={selected !== 1}
                    width="100%"
                  />
                </Slide>
                <Slide>
                  <Lottie
                    options={{
                      loop: false,
                      animationData: borrowSlide3,
                    }}
                    isStopped={selected !== 2}
                    width="100%"
                  />
                </Slide>
              </Slider>
            </div>
          </div>
        </Container.Lame>
      </Container>
      <Spacer />
      <Container bgColor="bg-mainColor-50">
        <Container.Lame className="">
          <div className="text-center mb-5">
            <h2 className="text-2xl lg:text-5xl font-display font-bold">FAQ</h2>
          </div>
          <FAQ />
        </Container.Lame>
      </Container>
      <Spacer />
      <hr className="w-24 mx-auto" />{" "}
      <footer>
        <div className="text-center py-12">
          <div className="font-bold text-lg">Made with 💖 in Paris 🇫🇷</div>
          <div className="text-gray-500">© Owna</div>
        </div>
      </footer>
    </>
  );
}
