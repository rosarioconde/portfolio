const Loading = () => {
  return (
    <div className="border-grey-300  m-10  mx-auto rounded-md border p-4 shadow">
      <div className="flex animate-pulse space-x-4">
        <div className="h-56 w-full place-items-center rounded bg-slate-700 p-2 md:w-1/3"></div>
        <div className="flex-1 space-y-6 py-1">
          <div className="h-5 rounded bg-slate-700"></div>
          <div className="space-y-3">
            <div className="grid grid-cols-3 gap-4">
              <div className="col-span-1 h-4 rounded bg-slate-700"></div>
              <div className="col-span-2 h-4 rounded bg-slate-700"></div>
              <div className="col-span-2 h-4 rounded bg-slate-700"></div>
              <div className="col-span-1 h-4 rounded bg-slate-700"></div>
              <div className="col-span-2 h-4 rounded bg-slate-700"></div>
              <div className="col-span-1 h-4 rounded bg-slate-700"></div>
              <div className="col-span-1 h-4 rounded bg-slate-700"></div>
              <div className="col-span-2 h-4 rounded bg-slate-700"></div>
              <div className="col-span-1 h-4 rounded bg-slate-700"></div>
              <div className="col-span-2 h-4 rounded bg-slate-700"></div>
            </div>
            <div className="h-5 rounded bg-slate-700"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
