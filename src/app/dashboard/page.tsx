import {
  Key,
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  ReactPortal,
  AwaitedReactNode,
  useState,
} from "react";

async function getProjects() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos`, {
    cache: "no-store",
  });
  const projects = await res.json();

  return projects;
}

export default async function Dashboard() {
  const projects = await getProjects();

  if (projects.length === 0) return <div>loading....</div>;

  return (
    <ul>
      {projects.map(
        (project: {
          id: Key | null | undefined;
          title:
            | string
            | number
            | bigint
            | boolean
            | ReactElement<any, string | JSXElementConstructor<any>>
            | Iterable<ReactNode>
            | ReactPortal
            | Promise<AwaitedReactNode>
            | null
            | undefined;
        }) => (
          <ul className="text-white" key={project.id}>
            <li>{project.title}</li>
          </ul>
        )
      )}
    </ul>
  );
}
