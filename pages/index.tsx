import type { NextPage } from "next";
import Banner from "../components/Banner";
import Form from "../components/Form";
import Nav from "../components/Nav";

const Home: NextPage = () => {
  return (
    <div className="">
      <Banner />
      <Nav />
      <div className="area z-0">
        <ul className="circles z-0">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>

      <section className="py-4 px-8 md:px-18 lg:px-20 xl:px-24 z-20">
        <div className="flex flex-col md:flex-row mb-8">
          <div className="md:flex-1 lg:flex-[1.6] mt-8 mb-8 md:mr-12 lg:mr-16 z-20">
            <div className="mb-24">
              <h1>
                The cloud is complex. <br /> We make it simple.
              </h1>
              <p className="leading-text">
                The cloud computing services you need, with the predictable
                pricing, developer-friendly features, and scalability you’ll
                love.
              </p>
            </div>

            <div>
              <h2>
                <span className="border-b-[0.30rem] border-dotted border-[#282828] tracking-wider">
                  aka
                </span>{" "}
                <sub>
                  <em className="text-slate-500">[Igbo]</em>
                </sub>
              </h2>
              <p className="mt-5 text-[1.35rem] text-[#444] font-">Hand</p>
            </div>

            {/* <div className="dashed-div-animatable">
              <svg
                className="c-dashed-line"
                width="880"
                height="240"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <path
                    id="c-dashed-line"
                    d="M875 0s5 120-435 120-435 120-435 120"
                  />
                </defs>
                <use
                  className="c-dashed-line__path"
                  xlinkHref="#c-dashed-line"
                />
                <use
                  className="c-dashed-line__dash"
                  xlinkHref="#c-dashed-line"
                />
              </svg>
            </div> */}

            <div></div>
          </div>
          <div className="flex-1 z-20">
            <div className="css-tsp5x1 e7kuofc1 relative bg-white rounded-lg text-[#080b2d] py-[3.5rem] px-12 shadow-[0_5px_5px_-2px_rgba(0,8,36,0.2)]">
              <Form />
            </div>
          </div>
        </div>
      </section>

      <section className="css-1ekt3g6 e1q0semo0 bg-white box-border pt-8 pb-0 px-6 md:px-18 lg:px-20 xl:px-24">
        <div className="css-85iaxa e1qd68fe0 box-border my-0 mx-auto max-w-[90rem] py-0 w-full">
          <div className="css-3uq0cx columns is-tablet is-gapless is-multiline">
            <div className="column is-4">
              <div className="css-1muv3lt ea5ndez0 flex">
                <div className="css-1l4w6pd ea5ndez1 items-center justify-center">
                  <img
                    data-src="data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjcyIiB2aWV3Qm94PSIwIDAgNzIgNzIiIHdpZHRoPSI3MiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBzdHJva2U9IiMwMDNmOTkiIHN0cm9rZS13aWR0aD0iMiI+PGNpcmNsZSBjeD0iMzYiIGN5PSIzNiIgZmlsbD0iI2NlZTBmYSIgcj0iMjYiLz48ZWxsaXBzZSBjeD0iMzYiIGN5PSIzNiIgcng9IjEwIiByeT0iMjYiLz48ZWxsaXBzZSBjeD0iMzYiIGN5PSIzNiIgcng9IjEwIiByeT0iMjYiIHRyYW5zZm9ybT0ibWF0cml4KDAgMSAtMSAwIDcyIDApIi8+PGNpcmNsZSBjeD0iNTAuNSIgY3k9IjIxLjUiIGZpbGw9IiNmZmYiIHI9IjEyLjUiLz48cGF0aCBkPSJtNDQgMThzLjc2NTEtMSAyLTEgMiAxIDIgMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHBhdGggZD0ibTU2IDI0Yy0xLjMyNDYgMi4wNTctMy4wNTM0IDMtNS41IDNzLTQuMTc1NC0uOTQzLTUuNS0zIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48cGF0aCBkPSJtNTMgMThzLjc2NTEtMSAyLTEgMiAxIDIgMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PC9nPjxwYXRoIGQ9Im00MSAxMy0xLTIgMyAuNXoiIGZpbGw9IiMwMDNmOTkiLz48cGF0aCBkPSJtNjAgMzItMS0yIDMgLjV6IiBmaWxsPSIjMDAzZjk5Ii8+PC9zdmc+"
                    src="data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjcyIiB2aWV3Qm94PSIwIDAgNzIgNzIiIHdpZHRoPSI3MiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBzdHJva2U9IiMwMDNmOTkiIHN0cm9rZS13aWR0aD0iMiI+PGNpcmNsZSBjeD0iMzYiIGN5PSIzNiIgZmlsbD0iI2NlZTBmYSIgcj0iMjYiLz48ZWxsaXBzZSBjeD0iMzYiIGN5PSIzNiIgcng9IjEwIiByeT0iMjYiLz48ZWxsaXBzZSBjeD0iMzYiIGN5PSIzNiIgcng9IjEwIiByeT0iMjYiIHRyYW5zZm9ybT0ibWF0cml4KDAgMSAtMSAwIDcyIDApIi8+PGNpcmNsZSBjeD0iNTAuNSIgY3k9IjIxLjUiIGZpbGw9IiNmZmYiIHI9IjEyLjUiLz48cGF0aCBkPSJtNDQgMThzLjc2NTEtMSAyLTEgMiAxIDIgMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHBhdGggZD0ibTU2IDI0Yy0xLjMyNDYgMi4wNTctMy4wNTM0IDMtNS41IDNzLTQuMTc1NC0uOTQzLTUuNS0zIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48cGF0aCBkPSJtNTMgMThzLjc2NTEtMSAyLTEgMiAxIDIgMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PC9nPjxwYXRoIGQ9Im00MSAxMy0xLTIgMyAuNXoiIGZpbGw9IiMwMDNmOTkiLz48cGF0aCBkPSJtNjAgMzItMS0yIDMgLjV6IiBmaWxsPSIjMDAzZjk5Ii8+PC9zdmc+"
                    alt="image"
                    className="null blur-up css-1pq2esu ls-is-cached lazyloaded"
                  />
                </div>
                <div className="css-pz3cfz ea5ndez2m flex flex-col ml-2 mb-12">
                  <h4 className="css-evfhg6 title">598k</h4>
                  <p>Customers worldwide.</p>
                </div>
              </div>
            </div>
            <div className="column is-4">
              <div className="css-1muv3lt ea5ndez0 flex">
                <div className="css-1l4w6pd ea5ndez1 items-center justify-center">
                  <img
                    data-src="data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjcyIiB2aWV3Qm94PSIwIDAgNzIgNzIiIHdpZHRoPSI3MiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBzdHJva2U9IiMwMDNmOTkiIHN0cm9rZS13aWR0aD0iMiI+PGNpcmNsZSBjeD0iMzciIGN5PSI0NyIgZmlsbD0iI2NlZTBmYSIgcj0iMTgiLz48cGF0aCBkPSJtMjguMjMyNCAzMS45NTQ2LTExLTE5LjA1MjYiLz48cGF0aCBkPSJtMzEuNzIyOCA4LTEyLjk5MDQgNy41IDQuNSA3Ljc5NDIgNi4wNjIyLTMuNS4zODQgMi42NjUxIDE0LjcyMjQtOC41LTQuODQ4MS0yLjM5NzEuMzQ4MS01LjM5NzE0LTcuNzk0MiA0LjUwMDA0eiIvPjxlbGxpcHNlIGN4PSIzNi45OTk5IiBjeT0iNDYuOTk5OSIgcng9IjEwIiByeT0iMTgiIHRyYW5zZm9ybT0ibWF0cml4KC0uODY2MDI1NCAuNSAtLjUgLS44NjYwMjU0IDkyLjU0MjcwMyA2OS4yMDMwNTcpIi8+PC9nPjxjaXJjbGUgY3g9IjE2LjczMiIgY3k9IjEyLjAzNiIgZmlsbD0iIzAwM2Y5OSIgcj0iMiIgdHJhbnNmb3JtPSJtYXRyaXgoLjg2NjAyNTQgLS41IC41IC44NjYwMjU0IC0zLjc3NjMzNyA5Ljk3ODUxOCkiLz48cGF0aCBkPSJtNTguMDMxMSAxNi4yNjczYy4xNjExLS40MzU0Ljc3NjctLjQzNTQuOTM3OCAwbDEuMjA2OSAzLjI2MTVjLjA1MDYuMTM2OC4xNTg2LjI0NDguMjk1NC4yOTU0bDMuMjYxNSAxLjIwNjljLjQzNTQuMTYxMS40MzU0Ljc3NjcgMCAuOTM3OGwtMy4yNjE1IDEuMjA2OWMtLjEzNjguMDUwNi0uMjQ0OC4xNTg2LS4yOTU0LjI5NTRsLTEuMjA2OSAzLjI2MTVjLS4xNjExLjQzNTQtLjc3NjcuNDM1NC0uOTM3OCAwbC0xLjIwNjktMy4yNjE1Yy0uMDUwNi0uMTM2OC0uMTU4Ni0uMjQ0OC0uMjk1NC0uMjk1NGwtMy4yNjE1LTEuMjA2OWMtLjQzNTQtLjE2MTEtLjQzNTQtLjc3NjcgMC0uOTM3OGwzLjI2MTUtMS4yMDY5Yy4xMzY4LS4wNTA2LjI0NDgtLjE1ODYuMjk1NC0uMjk1NHoiIGZpbGw9IiNjZWUwZmEiIHN0cm9rZT0iIzAwM2Y5OSIgc3Ryb2tlLXdpZHRoPSIyIi8+PHBhdGggZD0ibTEwIDMwdjYiIHN0cm9rZT0iIzAwM2Y5OSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2Utd2lkdGg9IjIiLz48cGF0aCBkPSJtMTMgMzNoLTYiIHN0cm9rZT0iIzAwM2Y5OSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2Utd2lkdGg9IjIiLz48L3N2Zz4="
                    src="data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjcyIiB2aWV3Qm94PSIwIDAgNzIgNzIiIHdpZHRoPSI3MiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBzdHJva2U9IiMwMDNmOTkiIHN0cm9rZS13aWR0aD0iMiI+PGNpcmNsZSBjeD0iMzciIGN5PSI0NyIgZmlsbD0iI2NlZTBmYSIgcj0iMTgiLz48cGF0aCBkPSJtMjguMjMyNCAzMS45NTQ2LTExLTE5LjA1MjYiLz48cGF0aCBkPSJtMzEuNzIyOCA4LTEyLjk5MDQgNy41IDQuNSA3Ljc5NDIgNi4wNjIyLTMuNS4zODQgMi42NjUxIDE0LjcyMjQtOC41LTQuODQ4MS0yLjM5NzEuMzQ4MS01LjM5NzE0LTcuNzk0MiA0LjUwMDA0eiIvPjxlbGxpcHNlIGN4PSIzNi45OTk5IiBjeT0iNDYuOTk5OSIgcng9IjEwIiByeT0iMTgiIHRyYW5zZm9ybT0ibWF0cml4KC0uODY2MDI1NCAuNSAtLjUgLS44NjYwMjU0IDkyLjU0MjcwMyA2OS4yMDMwNTcpIi8+PC9nPjxjaXJjbGUgY3g9IjE2LjczMiIgY3k9IjEyLjAzNiIgZmlsbD0iIzAwM2Y5OSIgcj0iMiIgdHJhbnNmb3JtPSJtYXRyaXgoLjg2NjAyNTQgLS41IC41IC44NjYwMjU0IC0zLjc3NjMzNyA5Ljk3ODUxOCkiLz48cGF0aCBkPSJtNTguMDMxMSAxNi4yNjczYy4xNjExLS40MzU0Ljc3NjctLjQzNTQuOTM3OCAwbDEuMjA2OSAzLjI2MTVjLjA1MDYuMTM2OC4xNTg2LjI0NDguMjk1NC4yOTU0bDMuMjYxNSAxLjIwNjljLjQzNTQuMTYxMS40MzU0Ljc3NjcgMCAuOTM3OGwtMy4yNjE1IDEuMjA2OWMtLjEzNjguMDUwNi0uMjQ0OC4xNTg2LS4yOTU0LjI5NTRsLTEuMjA2OSAzLjI2MTVjLS4xNjExLjQzNTQtLjc3NjcuNDM1NC0uOTM3OCAwbC0xLjIwNjktMy4yNjE1Yy0uMDUwNi0uMTM2OC0uMTU4Ni0uMjQ0OC0uMjk1NC0uMjk1NGwtMy4yNjE1LTEuMjA2OWMtLjQzNTQtLjE2MTEtLjQzNTQtLjc3NjcgMC0uOTM3OGwzLjI2MTUtMS4yMDY5Yy4xMzY4LS4wNTA2LjI0NDgtLjE1ODYuMjk1NC0uMjk1NHoiIGZpbGw9IiNjZWUwZmEiIHN0cm9rZT0iIzAwM2Y5OSIgc3Ryb2tlLXdpZHRoPSIyIi8+PHBhdGggZD0ibTEwIDMwdjYiIHN0cm9rZT0iIzAwM2Y5OSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2Utd2lkdGg9IjIiLz48cGF0aCBkPSJtMTMgMzNoLTYiIHN0cm9rZT0iIzAwM2Y5OSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2Utd2lkdGg9IjIiLz48L3N2Zz4="
                    alt="image"
                    className="null blur-up css-1pq2esu ls-is-cached lazyloaded"
                  />
                </div>
                <div className="css-pz3cfz ea5ndez2m flex flex-col ml-2 mb-12">
                  <h4 className="css-evfhg6 title">185</h4>
                  <p>Countries we serve.</p>
                </div>
              </div>
            </div>
            <div className="column is-4">
              <div className="css-1muv3lt ea5ndez0 flex">
                <div className="css-1l4w6pd ea5ndez1 items-center justify-center">
                  <img
                    data-src="data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjcyIiB2aWV3Qm94PSIwIDAgNzIgNzIiIHdpZHRoPSI3MiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Im01MS4zMzI3IDU5YzYuNDY2OS00LjcyOTcgMTAuNjY3My0xMi4zNzQzIDEwLjY2NzMtMjEgMC0xNC4zNTk0LTExLjY0MDYtMjYtMjYtMjZzLTI2IDExLjY0MDYtMjYgMjZjMCA4LjYyNTcgNC4yMDA0IDE2LjI3MDMgMTAuNjY3MyAyMXoiIGZpbGw9IiNjZWUwZmEiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPjxwYXRoIGQ9Im01MS4zMzI3IDU5djFoLjMyNjdsLjI2MzctLjE5Mjh6bS0zMC42NjU0IDAtLjU5MDQuODA3Mi4yNjM3LjE5MjhoLjMyNjd6bTQwLjMzMjctMjFjMCA4LjI5MzItNC4wMzcxIDE1LjY0MzMtMTAuMjU3NiAyMC4xOTI4bDEuMTgwNyAxLjYxNDRjNi43MTMzLTQuOTEgMTEuMDc2OS0xMi44NDkxIDExLjA3NjktMjEuODA3MnptLTI1LTI1YzEzLjgwNzEgMCAyNSAxMS4xOTI5IDI1IDI1aDJjMC0xNC45MTE3LTEyLjA4ODMtMjctMjctMjd6bS0yNSAyNWMwLTEzLjgwNzEgMTEuMTkyOS0yNSAyNS0yNXYtMmMtMTQuOTExNyAwLTI3IDEyLjA4ODMtMjcgMjd6bTEwLjI1NzYgMjAuMTkyOGMtNi4yMjA1LTQuNTQ5NS0xMC4yNTc2LTExLjg5OTYtMTAuMjU3Ni0yMC4xOTI4aC0yYzAgOC45NTgxIDQuMzYzNiAxNi44OTcyIDExLjA3NjkgMjEuODA3MnptLS41OTAzIDEuODA3MmgzMC42NjU0di0yaC0zMC42NjU0eiIgZmlsbD0iIzAwM2Y5OSIvPjxnIHN0cm9rZT0iIzAwM2Y5OSIgc3Ryb2tlLXdpZHRoPSIyIj48cGF0aCBkPSJtMzYgMTJ2NiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHBhdGggZD0ibTE3LjYxNTIgMTkuNjE1MiA0LjI0MjcgNC4yNDI3IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48cGF0aCBkPSJtNTQuMzg0OCAxOS42MTUyLTQuMjQyNyA0LjI0MjYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxwYXRoIGQ9Im0xMCAzOGg2IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48cGF0aCBkPSJtNTYgMzhoNiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHBhdGggZD0ibTUwLjE0MjYgNTIuMTQyMSA0LjI0MjYgNC4yNDI2IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48cGF0aCBkPSJtMjEuODU3NCA1Mi4xNDItNC4yNDI2IDQuMjQyNyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHBhdGggZD0ibTMxLjk3MzMgMzUuNDU3MSAxMS42MjIzLTExLjc3NzhjLjM2MTgtLjM2NjYuOTc0Ni0uMDEyOC44MzguNDgzOGwtNC4zODg3IDE1Ljk1NDEtNC4wMzU4LTIuMzMwMXoiLz48Y2lyY2xlIGN4PSIzNiIgY3k9IjM4IiBmaWxsPSIjZmZmIiByPSI2Ii8+PHJlY3QgZmlsbD0iI2ZmZiIgaGVpZ2h0PSI1IiByeD0iMSIgd2lkdGg9IjE2IiB4PSIyOCIgeT0iNDkiLz48cGF0aCBkPSJtMzkgNDl2NSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHBhdGggZD0ibTMzIDQ5djUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjwvZz48L3N2Zz4="
                    src="data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjcyIiB2aWV3Qm94PSIwIDAgNzIgNzIiIHdpZHRoPSI3MiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Im01MS4zMzI3IDU5YzYuNDY2OS00LjcyOTcgMTAuNjY3My0xMi4zNzQzIDEwLjY2NzMtMjEgMC0xNC4zNTk0LTExLjY0MDYtMjYtMjYtMjZzLTI2IDExLjY0MDYtMjYgMjZjMCA4LjYyNTcgNC4yMDA0IDE2LjI3MDMgMTAuNjY3MyAyMXoiIGZpbGw9IiNjZWUwZmEiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPjxwYXRoIGQ9Im01MS4zMzI3IDU5djFoLjMyNjdsLjI2MzctLjE5Mjh6bS0zMC42NjU0IDAtLjU5MDQuODA3Mi4yNjM3LjE5MjhoLjMyNjd6bTQwLjMzMjctMjFjMCA4LjI5MzItNC4wMzcxIDE1LjY0MzMtMTAuMjU3NiAyMC4xOTI4bDEuMTgwNyAxLjYxNDRjNi43MTMzLTQuOTEgMTEuMDc2OS0xMi44NDkxIDExLjA3NjktMjEuODA3MnptLTI1LTI1YzEzLjgwNzEgMCAyNSAxMS4xOTI5IDI1IDI1aDJjMC0xNC45MTE3LTEyLjA4ODMtMjctMjctMjd6bS0yNSAyNWMwLTEzLjgwNzEgMTEuMTkyOS0yNSAyNS0yNXYtMmMtMTQuOTExNyAwLTI3IDEyLjA4ODMtMjcgMjd6bTEwLjI1NzYgMjAuMTkyOGMtNi4yMjA1LTQuNTQ5NS0xMC4yNTc2LTExLjg5OTYtMTAuMjU3Ni0yMC4xOTI4aC0yYzAgOC45NTgxIDQuMzYzNiAxNi44OTcyIDExLjA3NjkgMjEuODA3MnptLS41OTAzIDEuODA3MmgzMC42NjU0di0yaC0zMC42NjU0eiIgZmlsbD0iIzAwM2Y5OSIvPjxnIHN0cm9rZT0iIzAwM2Y5OSIgc3Ryb2tlLXdpZHRoPSIyIj48cGF0aCBkPSJtMzYgMTJ2NiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHBhdGggZD0ibTE3LjYxNTIgMTkuNjE1MiA0LjI0MjcgNC4yNDI3IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48cGF0aCBkPSJtNTQuMzg0OCAxOS42MTUyLTQuMjQyNyA0LjI0MjYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxwYXRoIGQ9Im0xMCAzOGg2IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48cGF0aCBkPSJtNTYgMzhoNiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHBhdGggZD0ibTUwLjE0MjYgNTIuMTQyMSA0LjI0MjYgNC4yNDI2IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48cGF0aCBkPSJtMjEuODU3NCA1Mi4xNDItNC4yNDI2IDQuMjQyNyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHBhdGggZD0ibTMxLjk3MzMgMzUuNDU3MSAxMS42MjIzLTExLjc3NzhjLjM2MTgtLjM2NjYuOTc0Ni0uMDEyOC44MzguNDgzOGwtNC4zODg3IDE1Ljk1NDEtNC4wMzU4LTIuMzMwMXoiLz48Y2lyY2xlIGN4PSIzNiIgY3k9IjM4IiBmaWxsPSIjZmZmIiByPSI2Ii8+PHJlY3QgZmlsbD0iI2ZmZiIgaGVpZ2h0PSI1IiByeD0iMSIgd2lkdGg9IjE2IiB4PSIyOCIgeT0iNDkiLz48cGF0aCBkPSJtMzkgNDl2NSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHBhdGggZD0ibTMzIDQ5djUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjwvZz48L3N2Zz4="
                    alt="image"
                    className="null blur-up css-1pq2esu ls-is-cached lazyloaded"
                  />
                </div>
                <div className="css-pz3cfz ea5ndez2m flex flex-col ml-2 mb-12">
                  <h4 className="css-evfhg6 title">99.99%</h4>
                  <p>Uptime SLA for VMs &amp; Block Storage.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="CommunityGrid"
        className="css-fk0o5y e1q0semo0 bg-white py-8 px-8 md:px-18 lg:px-20 xl:px-24 box-border z-20"
      >
        <div className="css-85iaxa e1qd68fe0 z-20 box-border my-0 mx-auto max-w-[90rem] py-0 w-full">
          <div className="css-yspytq ew1uaye0 z-20 my-0 mx-auto max-w-[670px] text-center">
            <h2 className="darkestgrey title css-1qqke53 title text-[#000824] z-20">
              Build alongside a robust and supportive community like you
            </h2>
            <h3 className="darkergrey medium subtitle css-1qqke53 title">
              Quickly learn new tech concepts, programming languages, and get
              answers to your questions from a vibrant developer community.
            </h3>
            <p className="mt-8 z-20">
              <a
                href="https://www.digitalocean.com/community"
                className="button-link is-primary is-small is-squared css-alhp3m flex items-center justify-center bg-transparent border border-[#001430] rounded-[6.25rem] cursor-pointer font-['WorkSans_SemiBold'] text-base py-3 px-6 transition-all duration-200"
                // url="https://www.digitalocean.com/community"
              >
                Explore the community
              </a>
            </p>
          </div>
          <div className="css-161xfmy ew1uaye4 flex flex-col md:flex-row justify-center mt-20 mb-8 mx-auto max-w-[264rem]">
            <div className="css-p011hi ew1uaye5 flex flex-col mt-0 mb-12 md:mb-6 mx-4">
              <h4 className="title css-evfhg6 title">3K+</h4>
              <p className="medium subtitle css-evfhg6 title">
                In-depth lectures and tutorials
              </p>
            </div>
            <div className="css-p011hi ew1uaye5 flex flex-col mb-12 md:mb-6 mx-4">
              <h4 className="title css-evfhg6 title">3.5M</h4>
              <p className="medium subtitle css-evfhg6 title">
                Visits per month to our community site
              </p>
            </div>
            <div className="css-p011hi ew1uaye5 flex flex-col mb-12 md:mb-6 mx-4">
              <h4 className="title css-evfhg6 title">170K</h4>
              <p className="medium subtitle css-evfhg6 title">
                Participants in our 2020 hackathon
              </p>
            </div>
            <div className="css-p011hi ew1uaye5 flex flex-col mb-12 md:mb-6 mx-4">
              <h4 className="title css-evfhg6 title">30K+</h4>
              <p className="medium subtitle css-evfhg6 title">
                Questions answered in our community
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="NewCTABand" className="css-dx1ooz e1q0semo0 z-20">
        <div className="css-1k87evg e1qd68fe0 z-20">
          <div className="css-go06gt e119w9pv0 flex bg-[#6a76ff] rounded-[5px] py-[6.25rem] px-16">
            <div className="css-18p4bom e119w9pv1">
              <h2 className="text-white mb-6">Start building today</h2>
              <h3 className="subtitle medium text-white css-evfhg6 title">
                Sign up now and you'll be up and running on DigitalOcean in just
                minutes.
              </h3>
            </div>
            <div className="css-1i98aic e119w9pv2">
              <a
                href="https://cloud.digitalocean.com/registrations/new"
                className="button-link is-squared is-white css-kgdro"
              >
                Create your account
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="css-n7hb8q mt-8 mb-5 px-8 md:px-16 lg:px-20">
        <div className="css-1p94y5j flex flex-row">
          <div>
            <img
              data-src="https://images.prismic.io/www-static%2F903fd83b-8963-42c2-baf6-44f4d6bb83f2_digitalocean-logo-mark.svg?auto=compress,format"
              src="https://images.prismic.io/www-static%2F903fd83b-8963-42c2-baf6-44f4d6bb83f2_digitalocean-logo-mark.svg?auto=compress,format"
              alt="Digital Ocean logo"
              className="logo blur-up css-1pq2esu ls-is-cached lazyloaded"
            />
            <p className="copyright">© 2021 Mmuo, LLC. All rights reserved.</p>
          </div>

          <div>
            <ul className="css-mk78 flex space-x-5">
              <li>
                <a
                  href="https://www.linkedin.com/company/digitalocean/"
                  rel="nofollow"
                  className="css-kgdro inline-block h-full transition-all duration-100"
                >
                  <img
                    data-src="https://www-static.cdn.prismic.io/www-static/4c2ca1f4-35be-488b-93fb-9a7ef42a02f2_linkedin-social-icon.svg"
                    src="https://www-static.cdn.prismic.io/www-static/4c2ca1f4-35be-488b-93fb-9a7ef42a02f2_linkedin-social-icon.svg"
                    alt="social media icon"
                    className="null blur-up css-1pq2esu ls-is-cached lazyloaded"
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://dev.to/digitalocean"
                  rel="nofollow"
                  className="css-kgdro inline-block h-full transition-all duration-100"
                >
                  <img
                    data-src="https://www-static.cdn.prismic.io/www-static/1f4c0b73-f446-4798-9888-69d16f788fff_dev-social-icon.svg"
                    src="https://www-static.cdn.prismic.io/www-static/1f4c0b73-f446-4798-9888-69d16f788fff_dev-social-icon.svg"
                    alt="social media icon"
                    className="null blur-up css-1pq2esu ls-is-cached lazyloaded"
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://www.glassdoor.com/Overview/Working-at-DigitalOcean-EI_IE823482.11,23.htm"
                  rel="nofollow"
                  className="css-kgdro inline-block h-full transition-all duration-100"
                >
                  <img
                    data-src="https://www-static.cdn.prismic.io/www-static/8d2a15bd-f909-4f2c-b205-c5554342ec45_glassdoor-social-icon.svg"
                    src="https://www-static.cdn.prismic.io/www-static/8d2a15bd-f909-4f2c-b205-c5554342ec45_glassdoor-social-icon.svg"
                    alt="social media icon"
                    className="null blur-up css-1pq2esu ls-is-cached lazyloaded"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
