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
      className="w-full p-40 bg-[#d6d6d6] rounded-[10rem] text-[10rem] shadow-xl"
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
              autoComplete="name"
              className="w-[70%] p-20 pr-0 rounded-[5rem] shadow-xl"
            />
          </div>
          <div className="flex my-20 justify-between">
            <h2>Email:</h2>
            <input
              type="email"
              name="email"
              autoComplete="email"
              className="w-[70%] p-20 pr-0 rounded-[5rem] shadow-xl"
            />
          </div>
          <div className="flex my-20 justify-between">
            <h2>Message:</h2>
            <textarea
              name="message"
              className="w-[70%] p-20 rounded-[5rem] shadow-xl"
            ></textarea>
          </div>
        </div>
        <div className="flex my-20 justify-between items-center">
          <div className="flex gap-32 opacity-80">
            <button
            title='https://www.linkedin.com/in/cheungbonnie/'
              onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                e.preventDefault();
                window
                  .open('https://www.linkedin.com/in/cheungbonnie/', '_blank')
                  ?.focus();
              }}
              className="bg-[url('/linkedin.png')] bg-cover w-[20rem] h-[20rem]"
            ></button>
            <button
            title='https://github.com/bkcheung'
              onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                e.preventDefault();
                window.open('https://github.com/bkcheung', '_blank')?.focus();
              }}
              className="bg-[url('/github.png')] bg-cover w-[20rem] h-[20rem]"
            ></button>
          </div>

          <button type="submit" className="bg-[#0277b5]/20 hover:bg-white/30 shadow-xl p-20 rounded-[5rem]">
            Send Email
          </button>
        </div>
      </form>
    </section>
  );
}
