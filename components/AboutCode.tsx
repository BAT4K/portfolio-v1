'use client';

import React from 'react';

// Helper for keywords to keep JSX clean
const Keyword = ({ children }: { children: React.ReactNode }) => (
  <span className="text-pink-400">{children}</span>
);

const Str = ({ children }: { children: React.ReactNode }) => (
  <span className="text-green-400">{children}</span>
);

const Method = ({ children }: { children: React.ReactNode }) => (
  <span className="text-blue-400">{children}</span>
);

const Comment = ({ children }: { children: React.ReactNode }) => (
  <span className="text-gray-500 italic">{children}</span>
);

// Helper for rendering a code line with a line number
const Line = ({ num, children }: { num: number; children?: React.ReactNode }) => (
  <div className="flex leading-6">
    <span className="w-8 shrink-0 text-right mr-4 text-zinc-600 select-none font-mono text-sm">
      {num}
    </span>
    <span className="font-mono text-sm text-zinc-300 whitespace-pre">
      {children || ' '}
    </span>
  </div>
);

export default function AboutCode() {
  return (
    <div className="relative w-full max-w-lg overflow-hidden rounded-xl bg-[#1e1e1e] border border-zinc-800 shadow-2xl hover:scale-[1.01] transition-transform duration-300">
      {/* Header Bar */}
      <div className="flex items-center justify-between border-b border-zinc-800 bg-zinc-950/50 px-4 py-3">
        <div className="flex gap-2">
          <div className="h-3 w-3 rounded-full bg-red-500/80" />
          <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
          <div className="h-3 w-3 rounded-full bg-green-500/80" />
        </div>
        <div className="absolute left-1/2 -translate-x-1/2 text-xs font-mono text-gray-400">
          Hans.java
        </div>
      </div>

      {/* Editor Area */}
      <div className="p-4 overflow-x-auto">
        <Line num={1}>
          <Keyword>package</Keyword> com.hans.systems;
        </Line>
        <Line num={2} />
        <Line num={3}>
          <Keyword>public class</Keyword> Hans <Keyword>extends</Keyword> Engineer {'{'}
        </Line>
        <Line num={4}>
          {'  '}
          <Keyword>private String</Keyword> university = <Str>"Shiv Nadar Univ"</Str>;
        </Line>
        <Line num={5}>
          {'  '}
          <Keyword>private String</Keyword> role = <Str>"Backend System Eng"</Str>;
        </Line>
        <Line num={6} />
        <Line num={7}>
          {'  '}
          <Keyword>public</Keyword> <Method>Hans</Method>() {'{'}
        </Line>
        <Line num={8}>
          {'    '}
          <Keyword>this</Keyword>.os = <Str>"Fedora Linux"</Str>;
        </Line>
        <Line num={9}>
          {'    '}
          <Keyword>this</Keyword>.editor = <Str>"VS Code"</Str>;
        </Line>
        <Line num={10}>
          {'  '}
          {'}'}
        </Line>
        <Line num={11} />
        <Line num={12}>
          {'  '}
          <Keyword>public void</Keyword> <Method>dailyLife</Method>() {'{'}
        </Line>
        <Line num={13}>
          {'    '}
          <Keyword>while</Keyword>(alive) {'{'}
        </Line>
        <Line num={14}>
          {'      '}
          <Method>code</Method>(<Str>"Java NIO"</Str>, <Str>"Distributed Systems"</Str>);
        </Line>
        <Line num={15}>
          {'      '}
          <Method>playBass</Method>(<Str>"Groovy Lines"</Str>);
        </Line>
        <Line num={16}>
          {'      '}
          <Comment>// TODO: Fix sleep schedule</Comment>
        </Line>
        <Line num={17}>
          {'    '}
          {'}'}
        </Line>
        <Line num={18}>
          {'  '}
          {'}'}
        </Line>
        <Line num={19}>{'}'}</Line>
      </div>
    </div>
  );
}