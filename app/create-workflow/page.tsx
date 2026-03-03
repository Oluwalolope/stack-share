"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { useState } from "react";
import InfoIcon from "@/assets/icons/InfoIconSvg.svg";
import ArrowIcon from "@/assets/icons/arrow-icon.svg";
import TIpIcon from "@/assets/icons/tipIcon.svg";
import PreviewBackground from "@/assets/icons/PreviewBackground.svg";
import TwinkleStarImage from "@/assets/icons/TwinkleStarImage.svg";
import InsightIcon from "@/assets/icons/insightIcon.svg";
import MissionIcon from "@/assets/icons/targeticon.svg";
import ToolStackIcon from "@/assets/icons/ToolStackIcon.svg";
import CloseIcon from "@/assets/icons/close-icon.svg";
import SearchIcon from "@/assets/icons/SearchTool.svg";
import StoppedIcon from "@/assets/icons/StoppedIcon.svg";
import StepByStepIcon from "@/assets/icons/stepbystep.svg";
import AddStepIcon from "@/assets/icons/AddStepIcon.svg";
import DeleteIcon from "@/assets/icons/DeleteIcon.svg";
import { Space_Grotesk } from "next/font/google";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

export default function CreateWorkflow() {
  const [currentStep, setCurrentStep] = useState(1);
  const [rotate, setRotate] = useState(false);
  const [steps, setSteps] = useState<number>(1);
  const [preview, setPreview] = useState<boolean>(false);

  return (
    <div className={`h-screen bg-background ${spaceGrotesk.variable}`}>
      <Navbar />
      <div className="flex gap-10 py-8 px-16 w-full lg:flex-row flex-col">
        <div className="flex flex-col gap-8 w-full">
          {/* Intro text */}
          <div className="flex flex-col gap-2">
            <h2 className="text-4xl font-bold">Create Workflow</h2>
            <p className="text-[#90B2CB] font-normal text-base">
              Document your AI stack and process to help others automate their
              work.
            </p>
          </div>

          {/* Creation Progress */}
          <div className="p-4 flex flex-col gap-2 bg-[#182934] rounded-xl border border-[#315168]">
            <div className="flex justify-between items-center">
              <p className="font-medium text-sm">Creation Progress</p>
              <p className="text-sm font-bold text-[#0D93F2]">
                Step {currentStep} of 5: The Mission
              </p>
            </div>
            <input
              type="range"
              className="w-full h-2 accent-[#0D93F2] hover:cursor-pointer"
              min="0"
              max="5"
              value={currentStep}
              onChange={(e) => setCurrentStep(Number(e.target.value))}
            />
          </div>

          {/* Form */}
          <form action="POST" className="flex flex-col gap-10 pt-2">
            {/* The Basics */}
            <div className="flex flex-col gap-6">
              <h4 className="text-xl font-bold text-[#0D93F2] flex items-center gap-2">
                <Image src={InfoIcon} alt="info icon" />
                The Basics
              </h4>
              <div className="flex flex-col lg:flex-row justify-between items-center lg:gap-24 gap-4">
                <div className="flex flex-col items-start gap-2 w-full">
                  <p className="font-medium text-sm">Workflow Title</p>
                  <input
                    type="text"
                    placeholder="e.g. Automated Content Research"
                    className="px-4 pb-3.5 pt-3.25 bg-[#182934] border border-[#315168] rounded-lg w-full focus:outline-0"
                  />
                </div>
                <div className="flex flex-col gap-2 items-start w-full">
                  <p className="font-medium text-sm">Professional Role</p>
                  <div
                    className="relative w-full"
                    onClick={() => setRotate(!rotate)}
                  >
                    <select
                      name="professional-role"
                      id="professional-role"
                      className="appearance-none px-4 pb-3.5 pt-3.25 bg-[#182934] border border-[#315168] rounded-lg w-full pr-10 focus:outline-0"
                    >
                      <option value="">Select professional role</option>
                      <option value="developer">Developer</option>
                      <option value="designer">Designer</option>
                      <option value="marketer">Marketer</option>
                      <option value="other">Other</option>
                    </select>
                    <Image
                      src={ArrowIcon}
                      alt="dropdown arrow"
                      className={`absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer transition-transform duration-300 ${rotate ? "rotate-180" : ""}`}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* The Mission */}
            <div className="flex flex-col  gap-6">
              <div className="flex gap-2">
                <Image src={MissionIcon} alt="mission icon" />
                <h4 className="text-xl font-bold text-[#0D93F2]">
                  The Mission
                </h4>
              </div>

              <div className="flex flex-col justify-start gap-2">
                <label htmlFor="" className="font-medium text-sm">
                  Primary Goal
                </label>
                <textarea
                  name="primary-goal"
                  id="primary-goal"
                  placeholder="Describe the outcome of this workflow..."
                  className="px-4 py-3.5 bg-[#182934] border border-[#315168] rounded-lg w-full focus:outline-0 max-h-24"
                ></textarea>
              </div>
            </div>

            {/* The Tools Stack */}
            <div className="flex flex-col  gap-6">
              <h4 className="text-xl font-bold text-[#0D93F2] flex items-center gap-2">
                <Image src={ToolStackIcon} alt="Tools Stack icon" />
                The Tools Stack
              </h4>

              <div className="flex flex-col gap-4 relative">
                <Image
                  src={SearchIcon}
                  alt="search icon"
                  className="absolute left-5 top-5 cursor-pointer w-4.5 h-4.5"
                />
                <input
                  type="text"
                  placeholder="Search and add tools (e.g. ChatGPT, Notion, Zapier...)"
                  className="pl-12 pr-4 py-3.5 bg-[#182934] border border-[#315168] rounded-lg w-full focus:outline-0"
                />

                <div className="flex gap-2">
                  {["ChatGPT", "Calude 3.5", "Zapier"].map((tool) => (
                    <button
                      key={tool}
                      className="flex gap-2 px-3 py-1.5 bg-[#0D93F2]/20 border border-[#0D93F2]/40 rounded-full items-center justify-center"
                    >
                      <Image
                        src={InsightIcon}
                        alt="insight icon"
                        className="w-4 h-4 hidden lg:block"
                      />
                      <p className="font-normal  text-sm">{tool}</p>
                      <Image
                        src={CloseIcon}
                        alt="close icon"
                        className="w-3 h-3"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* The Step by Step Workflow */}
            <div className="flex flex-col  gap-6">
              <div className="flex justify-between">
                <div className="flex gap-2">
                  <Image src={StepByStepIcon} alt="Step by Step icon" />
                  <h4 className="text-xl font-bold text-[#0D93F2]">
                    The Step by Step Workflow
                  </h4>
                </div>
                <div className="flex gap-1 cursor-pointer items-center justify-center">
                  <Image src={AddStepIcon} alt="Add Step icon" />
                  <h4
                    className="text-sm font-bold text-[#0D93F2]"
                    onClick={() => setSteps(steps + 1)}
                  >
                    Add Step
                  </h4>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                {Array.from({ length: steps }).map((_, index) => (
                  <div
                    key={index}
                    className="border border-[#315168] p-6 ps-10 bg-[#182934] rounded-xl relative w-full"
                  >
                    <div className="bg-[#0D93F2] p-0.5 px-2 text-white font-bold text-sm rounded-full w-fit absolute left-0">
                      {index + 1}
                    </div>
                    <Image
                      src={DeleteIcon}
                      className="absolute right-2 cursor-pointer top-2"
                      alt="Trash icon"
                      onClick={() => {
                        steps > 1 ? setSteps(steps - 1) : setSteps(1);
                      }}
                    />
                    <div className="flex flex-col gap-4">
                      <input
                        type="text"
                        placeholder={`${index === 0 ? "First" : "Next"} Step Title`}
                        className="px-3 py-1.5 bg-[#182934] border border-[#315168] rounded-lg w-full focus:outline-0"
                      />

                      <textarea
                        placeholder="Describe what happens in this step..."
                        className="px-3 py-1.5 bg-[#182934] border border-[#315168] rounded-lg w-full focus:outline-0 text-white"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* The Unique Insight */}
            <div className="flex flex-col  gap-6">
              <h4 className="text-xl font-bold text-[#0D93F2] flex items-center gap-2">
                <Image src={ToolStackIcon} alt="Tools Stack icon" />
                The Unique Insight
              </h4>

              <div className="border border-[#0D93F2]/20 bg-[#0D93F2]/5 p-6 rounded-xl flex flex-col gap-4">
                <div className="flex gap-2">
                  <Image src={StoppedIcon} alt="Stopped person Image" />
                  <p className="text-sm font-bold text-[#0D93F2]">
                    One Thing You Stopped Using
                  </p>
                </div>

                <textarea
                  name="stopped"
                  id="stopped"
                  placeholder="What tool or manual process did this workflow replace?"
                  className="px-4 py-3 border border-[#0D93F2]/30 bg-[#101B22] rounded-lg w-full focus:outline-0 max-h-18.5 placeholder:text-[#6B7280]"
                ></textarea>
              </div>
            </div>

            {/* Submit & Preview */}
            <div className="flex gap-4 w-full pt-10">
              <button
                type="submit"
                className="w-full bg-[#0D93F2] text-white py-4 font-bold text-base rounded-xl cursor-pointer hover:bg-transparent hover:border-2 hover:py-2 hover:border-[#0D93F2] hover:text-[#0D93F2]"
              >
                Publish Workflow
              </button>
              <button
                type="button"
                className="px-8 pt-3.5 pb-3.75 text-nowrap rounded-xl bg-[#182934] border border-[#315168] font-bold text-white text-base cursor-pointer hover:bg-[#0D93F2] hover:text-white hover:border-[#0D93F2] hover:py-2"
                onClick={() => setPreview(!preview)}
              >
                {preview ? "Hide Preview" : "Preview Full Page"}
              </button>
            </div>
          </form>
        </div>

        {/* Preview */}
        {preview && (
          <div className="flex flex-col gap-6 min-w-1/4">
            <div className="flex justify-between items-center">
              <p className="font-medium text-sm text-[#90B2CB]">LIVE PREVIEW</p>
              <p className="text-[10px] font-bold text-[#0D93F2] flex items-center gap-1">
                <span className="w-2 h-2 bg-accent-green rounded-full"></span>
                SYNCING
              </p>
            </div>

            {/* Preview Card */}
            <div>
              <div className="relative rounded-t-2xl overflow-hidden">
                <Image
                  src={PreviewBackground}
                  alt="preview background place-self-center"
                  className="w-full h-full"
                />
                <Image
                  src={TwinkleStarImage}
                  alt="twinkle star"
                  className="absolute top-1/3 left-1/2 -translate-x-1/2"
                />
              </div>
              <div className="px-6 py-5.75 flex flex-col gap-4 bg-[#182934] rounded-b-2xl border border-[#315168] items-start">
                <div className="flex flex-col gap-1.75">
                  <h6 className="text-[#0D93F2] text-[10px] bg-[#0D93F2]/10 px-2 py-px font-bold rounded-sm w-fit">
                    {"product manager".toUpperCase()}
                  </h6>
                  <h4 className="text-xl font-bold">
                    Automated Content Research
                  </h4>
                </div>
                <p className="text-sm text-[#90B2CB] max-w-87.5">
                  Describe the outcome of this workflow... use the 'Deep
                  Analysis' prompt in Claude to break down and analyze the
                  content.
                </p>

                {/* Tools */}
                <div className="py-2 px-0 flex items-center gap-2 justify-center">
                  {Array.from({ length: 3 }).map((_, index) => (
                    <div key={index} className="p-2 bg-[#1E293B] rounded-lg">
                      <Image src={InsightIcon} alt="Tools Icons" />
                    </div>
                  ))}

                  <p className="text-sm text-[#90B2CB]">+2 more</p>
                </div>

                {/* Process Preview */}
                <div className=" pt-4 flex flex-col gap-3 w-full">
                  <div className="flex justify-between w-full">
                    <p className="font-medium text-xs text-[#90B2CB]">
                      PROCESS PREVIEW
                    </p>
                    <p className="text-xs text-[#90B2CB]">3 Steps</p>
                  </div>

                  <div className="flex flex-col gap-3">
                    {Array.from({ length: 3 }).map((_, index) => (
                      <div key={index} className="flex gap-3 items-center">
                        <div className="w-6 h-6 place-content-center bg-[#0D93F2]/10 rounded-full px-2">
                          <p className="font-bold text-xs text-[#0D93F2]">
                            {index + 1}
                          </p>
                        </div>
                        <div className="w-full py-1.5 bg-[#315168] rounded-lg h-fit"></div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Insight Preview */}
                <div className="bg-[#101B22]/50 p-3 flex flex-col gap-1">
                  <p className="font-medium text-xs text-[#0D93F2]">
                    INSIGHT PREVIEW
                  </p>
                  <p className="text-sm text-[#90B2CB]">
                    "I stopped using manual Google Sheets tracking for initial
                    drafts..."
                  </p>
                </div>
              </div>
            </div>

            {/* QUick Tip */}
            <div className="p-4 flex justify-start items-start gap-3 bg-[#182934] rounded-xl border border-[#315168]">
              <Image src={TIpIcon} alt="info icon" />

              <div className="flex flex-col gap-1">
                <p className="font-bold text-sm">Quick Tip</p>
                <p className="text-sm text-[#90B2CB]">
                  Workflows with clear tool connections get 3x more views from
                  the community.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
