'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { RxChevronRight } from 'react-icons/rx';

const Home = () => {
  return (
    <motion.div
      className="mx-auto flex max-w-screen-md flex-col justify-center p-4"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 50 }}
      transition={{ duration: 0.5 }}
    >
      <article className="mx-auto max-w-xl px-4 space-y-8">
        <div className="m-4 mb-4 rounded-xl bg-primary text-foreground bg-opacity-35 p-4 text-center">
          Hello, I&apos;m an indie app developer based in Philippines!
        </div>

        <div className="mb-4 flex flex-col items-center justify-between md:flex-row md:items-start">
          <div className="">
            <h2 className="text-4xl font-semibold">Adrian Villanueva</h2>
            <div className="text-base">
              Software Developer ( Artist / Developer / Dog Lover )
            </div>
          </div>
          <div className="mt-4 md:mt-0">
            <Avatar className="h-20 w-20">
              <AvatarImage src="/villy.png" />
              <AvatarFallback>AV</AvatarFallback>
            </Avatar>
          </div>
        </div>

        <div>
          <h3 className="my-2 underline">Works</h3>
          <p className="text-inde text-justify">
            &emsp;Villy is a freelance and a full-stack developer based in
            Philippines with a passion for building digital services/stuff he
            wants. He has a knack for all things launching products, from
            planning and designing all the way to solving real-life problems
            with code. When not online, he loves hanging out with his camera.
            Currently, he is living off of his own product called Inkdrop. He
            publishes content for marketing his products and his YouTube channel
            called &quot;Dev as Life&quot; has more than 100k subscribers.
          </p>
          <div className="flex justify-center">
            <Button className="my-2">
              <Link href="/works">
                <div className="flex items-center justify-center">
                  My portfolio
                  <RxChevronRight className="ml-1" />
                </div>
              </Link>
            </Button>
          </div>
          <div></div>
        </div>

        <div>
          <h3 className="my-2 underline">Works</h3>
          <p className="text-inde text-justify">
            &emsp;Villy is a freelance and a full-stack developer based in
            Philippines with a passion for building digital services/stuff he
            wants. He has a knack for all things launching products, from
            planning and designing all the way to solving real-life problems
            with code. When not online, he loves hanging out with his camera.
            Currently, he is living off of his own product called Inkdrop. He
            publishes content for marketing his products and his YouTube channel
            called &quot;Dev as Life&quot; has more than 100k subscribers.
          </p>
          <div className="flex justify-center">
            <Button className="my-2">
              <Link href="/works">
                <div className="flex items-center justify-center">
                  My portfolio
                  <RxChevronRight className="ml-1" />
                </div>
              </Link>
            </Button>
          </div>
          <div></div>
        </div>
        <div>
          <h3 className="my-2 underline">Works</h3>
          <p className="text-inde text-justify">
            &emsp;Villy is a freelance and a full-stack developer based in
            Philippines with a passion for building digital services/stuff he
            wants. He has a knack for all things launching products, from
            planning and designing all the way to solving real-life problems
            with code. When not online, he loves hanging out with his camera.
            Currently, he is living off of his own product called Inkdrop. He
            publishes content for marketing his products and his YouTube channel
            called &quot;Dev as Life&quot; has more than 100k subscribers.
          </p>
          <div className="flex justify-center">
            <Button className="my-2">
              <Link href="/works">
                <div className="flex items-center justify-center">
                  My portfolio
                  <RxChevronRight className="ml-1" />
                </div>
              </Link>
            </Button>
          </div>
        </div>
      </article>
    </motion.div>
  );
};

export default Home;
