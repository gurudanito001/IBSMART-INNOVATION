"use client"

import NavBar from "../../navbar";
import Footer from "../../footer";
import useAnalytics from '@/app/hooks/useAnalytics'


export default function Page() {
  useAnalytics();
  return (
    <main className="bg-white text-black flex flex-col">
      <NavBar />
      <article className=" w-full max-w-screen-lg px-5 md:px-12 mx-auto my-14 text-lg">
        <h1 className="font-semibold text-2xl md:text-4xl mb-5">Processors and Computer Performance</h1>
        <div className="hidden sm:block h-80 w-auto bg-[url('/images/processor-image.png')] bg-no-repeat bg-contain bg-center">
        </div>
        <div className="sm:hidden h-80 w-auto bg-[url('/images/processor-thumbnail.jpg')] bg-no-repeat bg-contain bg-center">
        </div>
        <h4 className="mt-7 text-gray-700 text-xl font-semibold mb-3">Processors: What are they and How do they impact laptop performance?</h4>
        <p>
        By the end of this article, you will be able to fully understand the processor descriptions in laptops and computers and make better purchase decisions when buying a laptop / computer.
        </p>

        <p className="mt-3">
          <strong>What is a processor</strong>: A processor, also known as a CPU (Central Processing Unit), is the brain of a computer. It performs calculations, executes instructions, and processes data to run programs and operating systems.There are a few popular processor manufacturers like Intel, AMD, Apple, and Nividia. Intel processors are the most popular computer processors. Computer processors with descriptions like Intel Core (i3, i5, i7, i9) are from Intel. <br/>
          Below is an example of a processor description and what each of the descriptors mean.
        </p>

        <div className="h-80 w-auto border bg-[url('/images/processor-description.png')] bg-no-repeat bg-contain bg-center bg-gray-400 my-8">
        </div>

        <ul>
          <li> <strong>Intel Core</strong>: Indicates the manufacturer (Intel) and the processor family (Core series).</li>
          <li> <strong>i3</strong>: Specifies the performance tier (i3 = entry-level, i5 = mid-range, i7/i9 = high-end).</li>
          <li> <strong>7100 CPU</strong>: <em>7</em> indicates the generation (7th Gen) while <em>100</em> specifies the model within the generation. Higher numbers typically mean better performance.</li>
          <li> <strong>@ 3.90GHz</strong>: The base clock speed of the processor. This is the speed at which the CPU runs under normal conditions. Higher GHz generally means better performance</li>
        </ul>


        <h4 className="mt-7 text-gray-700 text-xl font-semibold mb-3">Main features of a processor</h4>

        <p className="mt-3">We are going to explore the main features of a processor and see how each of them plays a role in the performance and efficiency of the processor.</p>

        <p className="mt-3">
          <strong>Clock Speed</strong> <br />
          Clock speed, measured in GHz (gigahertz), represents how many cycles a processor can execute per second. A higher clock speed means the processor can execute more instructions per second. This results in better performance.For example, a processor with a clock speed of 3.5 GHz can perform 3.5 billion cycles per second.Clock speed affects the speed at which the laptop / computer opens applications, loads web pages, and does basic gaming.
        </p>

        <p className="mt-3">
          <strong>Number of cores</strong> <br />
          A core is an independent processing unit within the CPU.Although speed is important, the number of cores is even more important depending on the type of task being executed by the computer.A computer with 2 cores means it can handle 2 tasks simultaneously. The more cores it has the more tasks it can handle simultaneously.How does this affect the speed of the computer? I will explain this concept using a real-life example.If a chef wants to make scrambled eggs, he will only need one burner or stove. How soon the eggs will be ready mainly depends on how quickly the burner can cook the eggs.On the other hand, if the chef is making a three-course meal with many dishes, his speed will depend more on how many burners he has than how fasteach burner can cook.<br />

          Similarly, in a computer processor, having more cores is good for performance depending on the task. Some tasks will be executed faster if there are more cores to share the load so thattasks can be executed simultaneously. <br />

          <strong className="font-normal underline">Hyper-Threading</strong>: A thread represents the smallest sequence of programmed instructions that the CPU can manage. Hyper-Threading enables one core to be able to handle multiple threads.This enables each core to multitask which further improves the performance of the processor.
        </p>

        <p className="mt-3">
          <strong>Generation of processor</strong> <br />
          This refers to the design iteration or release cycle of the processor. Higher generations mean that the processor is more recent and has benefited from the latest advancements in technology.Newer generation processors improve both in speed (time taken) and efficiency (amount of resources utilized for the task eg battery percentage). Raw clock speed isn&apos;t everything, the efficiency of the CPU architecture matters too. Processors with more recent generations are faster and more efficient. 
        </p>

        <h4 className="mt-7 text-gray-700 text-xl font-semibold mb-3">Other features of a processor</h4>

        <p className="mt-3">
          <strong>Thermal throttling and Thermal Design</strong>:
          Throttling refers to the process in which the processor regulates its performance so it won’t overheat and damage some of its components.When the processor comes under sustained load for a while, it may need to throttle its performance. Computers with better thermal or cooling design makes it possible for the computer to perform heavy tasks for sustained periods without needing to throttle.
        </p>

        <p className="mt-3">
          <strong>Overclocking</strong>:
          This refers to increasing the CPU&apos;s clock speed beyond its factory settings to boost performance. Before a processor is overclocked, additional cooling should be provided to make sure that the processor can sustain such performance speeds without overheating which leads to throttling.
        </p>

        <p className="mt-3">
          <strong>Integrated Graphics</strong>:
          Some CPUs come with an integrated GPU to handle graphics tasks without needing a dedicated graphics card. Tasks like high-resolution gaming and video rendering will be handled better by a processor that has better graphics processing.
        </p>

        <p className="mt-3">The processor is an important component of the computer. With the information explained here, you should be able to understand which processor is a good choice when buying a computer or assembling one yourself.That&apos;s all for now. Bye </p>
      </article>

      <Footer />
    </main>
  )
}