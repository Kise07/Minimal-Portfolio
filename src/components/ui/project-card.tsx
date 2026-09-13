export const ProjectCard = ({
  project,
}: {
  project: (typeof PROJECTS)[number];
}) => {
  return (
    <div className="flex flex-col rounded-xl border border-neutral-200 bg-neutral-50 p-2 dark:border-neutral-800 dark:bg-neutral-900">
      <div className="flex flex-1 items-center justify-center overflow-hidden rounded-lg">
        <video
          src={project.videoUrl}
          autoPlay
          loop
          muted
          playsInline
          className="h-full md:object-cover"
        />
      </div>
      <div className="mt-3 flex items-center justify-between">
        <h3 className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
          {project.name}
        </h3>
      </div>
    </div>
  );
};

export const PROJECTS = [
  {
    id: 1,
    name: "Job Board MVP",
    videoUrl:
      "https://pub-d3c342b4d8e242deb0f60d25f55981ac.r2.dev/videos/demos/jobboardmvp/jobboardmvp-demo.mp4",
  },
  {
    id: 2,
    name: "Link in Bio",
    videoUrl:
      "https://pub-d3c342b4d8e242deb0f60d25f55981ac.r2.dev/videos/demos/linkinbio/linkinbio.mp4",
  },
];
