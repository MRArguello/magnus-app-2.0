import React from "react";
import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
    return {
        ...components,
        h1: (props) => (
            <h1 className="text-3xl font-bold my-2" {...props} />
        ),
        h2: (props) => (
            <h2 className="text-2xl font-bold my-2" {...props} />
        ),
        h3: (props) => (
            <h3 className="text-xl font-bold my-2" {...props} />
        ),
        h4: (props) => (
            <h3 className="text-lg font-bold my-2" {...props} />
        ),
        p: (props) => (
            <p className="text-base leading-relaxed mb-2" {...props} />
        ),
        ul: (props) => (
            <ul className="list-disc pl-6 " {...props} />
        ),
        ol: (props) => (
            <ol className="list-decimal pl-6 " {...props} />
        ),
        li: (props) => (
            <li className=" " {...props} />
        ),
        code: (props) => (
            <code className="bg-gray-100 text-green-500 rounded px-2 py-1 font-mono text-sm" {...props} />
        ),
        pre: (props) => (
            <pre className="bg-gray-900 text-gray-100 p-4 rounded-md overflow-x-auto mb-4" {...props} />
        ),
        table: (props) => (
            <table className="w-full border-collapse border border-gray-300 mb-4" {...props} />
        ),
        thead: (props) => (
            <thead className="bg-gray-100" {...props} />
        ),
        th: (props) => (
            <th className="border border-gray-300 px-4 py-2 text-left font-semibold" {...props} />
        ),
        td: (props) => (
            <td className="border border-gray-300 px-4 py-2" {...props} />
        ),
        tbody: (props) => <tbody {...props} />,
        a: (props) => (
            <a className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer" {...props} />
        ),
    };
}
