import React, { ReactElement, useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { projectFirestore, timestamp } from "../../firebase/config";
import CRMLayout from "../../components/crmlayout";
import Layout from "../../components/layout";

import { useToasts } from "react-toast-notifications";
import Toast from "../../components/Toast";
import SelectMenu from "../../components/selectmenu";

export default function Home() {
  const [title, setTitle] = useState("");
  const [intro, setIntro] = useState("");
  const [moduleGroup, setModuleGroup] = useState("");
  const [loading, setLoading] = useState(false);

  const { addToast } = useToasts();

  // Add a new document in collection "cities"
  async function makePost(e: React.FormEvent) {
    e.preventDefault();

    setLoading(true);

    try {
      await addDoc(collection(projectFirestore, "modules"), {
        title,
        intro,
        date: timestamp(),
      });

      addToast(<Toast>Your post was uploaded.</Toast>, {
        appearance: "success",
        autoDismiss: true,
      });

      setTitle("");
      setIntro("");
    } catch (err: any) {
      addToast(
        <Toast heading="We're sorry">We couldn't upload your post.</Toast>,
        {
          appearance: "error",
          autoDismiss: true,
        }
      );
    }

    setLoading(false);
  }

  return (
    <section className="py-4 pb-24 px-8 md:px-18 lg:px-20 xl:px-24 z-20 min-h-[28rem] bg-white border border-gray-100">
      <div className="py-6 w-[100%]">
        <h2 className="text-[#333333] mb-4">Create Module</h2>
        <form className="relative" onSubmit={makePost}>
          <p className="mb-6 text-sm font-medium text-slate-700">
            Use Module Groups to organize your Modules.
          </p>
          <div className="w-full flex gap-x-4">
            <div className="flex-1">
              <label className="block mb-6">
                <span className="block text-sm font-medium text-slate-700">
                  Create new Module Group
                </span>
                <input
                  type="text"
                  value={moduleGroup}
                  onChange={(e) => setModuleGroup(e.target.value)}
                  placeholder="e.g Basics or Group 1"
                  className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500
    "
                />
              </label>
            </div>
            <div className="flex-1">
              <SelectMenu label="Select existing Module Group" />
            </div>
          </div>

          <label className="block mb-6">
            <span className="block text-sm font-medium text-slate-700">
              Title
            </span>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g Verbs"
              className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500
    "
            />
          </label>

          <label className="block">
            <span className="block text-sm font-medium text-slate-700">
              Introduction (Preface)
            </span>
            <textarea
              value={intro}
              onChange={(e) => setIntro(e.target.value)}
              placeholder="Detail what you want the learner to be aware of before they begin the module."
              className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500 textarea
    "
            />
          </label>

          <button
            disabled={title === "" && intro === ""}
            className="absolute right-0 mt-4 bg-green-500 hover:bg-green-600 active:bg-green-900 disabled:bg-gray-400 text-white px-6 py-2 rounded-sm focus:outline-none active:outline-none"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}

Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      <CRMLayout>{page}</CRMLayout>
    </Layout>
  );
};
