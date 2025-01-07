import { toast } from 'react-toastify';

export default function ContactForm() {
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    formData.append('access_key', `${process.env.NEXT_PUBLIC_KEY}`);

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    await toast.promise(
      fetch(`${process.env.NEXT_PUBLIC_URL}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: json,
      }),
      {
        pending: 'Sending...',
        success: 'Email sent successfully!',
        error: 'Oops! Something went wrong. Please try again later.',
      }
    );
  }

  return (
    <section
      className="w-full p-40 bg-white/50 rounded-[10rem] text-[10rem]"
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <form onSubmit={handleSubmit} className="flex flex-col justify-between ">
        <div className="flex flex-col">
          <div className="flex my-20 justify-between items-center">
            <h2>Name:</h2>
            <input
              type="text"
              name="name"
              className="w-[70%] p-20 rounded-[5rem]"
            />
          </div>
          <div className="flex my-20 justify-between">
            <h2>Email:</h2>
            <input
              type="email"
              name="email"
              className="w-[70%] p-20 rounded-[5rem]"
            />
          </div>
          <div className="flex my-20 justify-between">
            <h2>Message:</h2>
            <textarea
              name="message"
              className="w-[70%] p-20 rounded-[5rem]"
            ></textarea>
          </div>
        </div>
        <div className="flex my-20 justify-between items-center">
          <div className="flex gap-32 opacity-60">
            <button
              onClick={() =>
                window
                  .open('https://www.linkedin.com/in/cheungbonnie/', '_blank')
                  ?.focus()
              }
              className="bg-[url('/linkedin.png')] bg-cover w-[20rem] h-[20rem]"
            ></button>
            <button
              onClick={() =>
                window.open('https://github.com/bkcheung', '_blank')?.focus()
              }
              className="bg-[url('/github.png')] bg-cover w-[20rem] h-[20rem]"
            ></button>
          </div>

          <button type="submit" className="bg-beige p-20 rounded-[5rem]">
            Send Email
          </button>
        </div>
      </form>
      {/* <ToastContainer/> */}
    </section>
  );
}
