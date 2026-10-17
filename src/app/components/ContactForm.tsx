import { toast } from 'react-toastify';

interface ContactFormProps {
  portrait?: boolean;
}

export default function ContactForm({ portrait = false }: ContactFormProps) {
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

  const container = portrait
    ? 'w-full p-[10rem] bg-[#d6d6d6] rounded-[16rem] text-[13rem] shadow-xl'
    : 'w-full p-40 bg-[#d6d6d6] rounded-[10rem] text-[10rem] shadow-xl';
  const row = portrait
    ? 'flex flex-col my-[6rem] gap-[3rem]'
    : 'flex my-20 justify-between';
  const input = portrait
    ? 'w-full h-[32rem] px-[10rem] text-[13.5rem] rounded-[10rem] shadow-xl'
    : 'w-[70%] p-20 pr-0 rounded-[5rem] shadow-xl';
  const icon = portrait ? 'w-[30rem] h-[30rem]' : 'w-[20rem] h-[20rem]';
  const send = portrait
    ? 'bg-[#0277b5]/20 hover:bg-white/30 shadow-xl h-[32rem] px-[14rem] rounded-[10rem]'
    : 'bg-[#0277b5]/20 hover:bg-white/30 shadow-xl p-20 rounded-[5rem]';

  return (
    <section
      className={container}
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <form onSubmit={handleSubmit} className="flex flex-col justify-between ">
        <div className="flex flex-col">
          <div className={`${row} ${portrait ? '' : 'items-center'}`}>
            <h2>Name:</h2>
            <input
              type="text"
              name="name"
              autoComplete="name"
              className={input}
            />
          </div>
          <div className={row}>
            <h2>Email:</h2>
            <input
              type="email"
              name="email"
              autoComplete="email"
              className={input}
            />
          </div>
          <div className={row}>
            <h2>Message:</h2>
            <textarea
              name="message"
              className={
                portrait
                  ? 'w-full h-[60rem] p-[8rem] text-[13.5rem] rounded-[10rem] shadow-xl'
                  : 'w-[70%] p-20 rounded-[5rem] shadow-xl'
              }
            ></textarea>
          </div>
        </div>
        <div className="flex my-20 justify-between items-center">
          <div className="flex gap-32 opacity-80">
            <button
              title="https://www.linkedin.com/in/cheungbonnie/"
              onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                e.preventDefault();
                window
                  .open('https://www.linkedin.com/in/cheungbonnie/', '_blank')
                  ?.focus();
              }}
              className={`bg-[url('/linkedin.png')] bg-cover ${icon}`}
            ></button>
            <button
              title="https://github.com/bkcheung"
              onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                e.preventDefault();
                window.open('https://github.com/bkcheung', '_blank')?.focus();
              }}
              className={`bg-[url('/github.png')] bg-cover ${icon}`}
            ></button>
          </div>

          <button type="submit" className={send}>
            Send Email
          </button>
        </div>
      </form>
    </section>
  );
}
