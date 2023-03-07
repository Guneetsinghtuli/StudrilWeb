
export default function Table() {
  return (
    <>
      <section className="mt-10 mb-24">
        <div>
          <p className="text-left md:ml-8 ml-4 text-xl font-poppins  text-[#56647A] ">
            Here's Why{" "}
          </p>
          <h1 className="font-bold font-montserrat md:ml-8 ml-4 mb-4 text-[#1E2B5E] md:text-5xl text-[33px] pt-100">
            You Need
            <br /> Studrill So Much
          </h1>
        </div>

        <div className="overflow-x-scroll m-4 md:mx-0 rounded-t-md">
          <table className="w-max border-collapse: separate">
            <tbody className="w-9/12 ">
              <tr className="bg-[#1E2B5E] border border-4 border-[#1E2B5E] p-8 rounded-t-lg">
                <th
                  colspan="2"
                  className="font-montserrat text-white rounded-t-lg"
                >
                  Why is it hard to be fluent in Japanese with ‘only’?
                </th>
              </tr>
              <tr>
                <td className="border border-4 rounded-t-lg border-[#1E2B5E] md:p-5 p-2 text-[#1E2B5E] font-poppins">
                  If you’re only learning from language schools and<br/> University…
                </td>
                <td className="border border-4 border-[#1E2B5E] md:p-5 p-2 text-[#1E2B5E] font-poppins">
                  They focus too much on finishing the JLPT workbook. You will <br/>
                  get to speak in the last 10 minutes of the class. <br />
                </td>
              </tr>
              <tr>
                <td className="border border-4 border-[#1E2B5E] md:p-5 p-2 text-[#1E2B5E] font-poppins">
                  If you’re only learning from conversation books…
                </td>
                <td className="border border-4 border-[#1E2B5E] md:p-5 p-2 text-[#1E2B5E] font-poppins">
                  They make you memorize the dialogues for a day and then forget <br/>
                  them the next day.
                </td>
              </tr>
              <tr>
                <td className=" border border-4 border-[#1E2B5E] md:p-5 p-2 text-[#1E2B5E] font-poppins">
                  If you’re only learning from TVs and movies...
                </td>
                <td className="border border-4 border-[#1E2B5E] md:p-5 p-2 text-[#1E2B5E] font-poppins">
                  They help you acquire 2-3 new phrases, might be less or zero <br/>
                  if you are not an advanced learner.
                </td>
              </tr>
              <tr>
                <td className="border border-4 border-[#1E2B5E] md:p-5 p-2 text-[#1E2B5E] font-poppins">
                  If you’re only learning from Japanese friends…
                </td>
                <td className=" border border-4 border-[#1E2B5E] md:p-5 p-2 text-[#1E2B5E] font-poppins">
                  They are just dreams (it’s impossible). If you do have one, <br/>
                  you’re the luckiest.
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="overflow-x-scroll my-12 m-4 md:mx-0 rounded-t-md">
          <table className="w-max">
            <tbody className="w-9/12">
              <tr className="bg-[#1E2B5E] p-8">
                <th className="border border-4 border-[#1E2B5E] font-montserrat text-white">
                  Why is Studrill here to help you?
                </th>
                <th className="border border-4 border-[#1E2B5E] font-montserrat text-white">
                  Why is life easier with Studrill?
                </th>
              </tr>
              <tr>
                <td className="border border-4 border-[#1E2B5E] p-5 text-[#1E2B5E] font-poppins">
                  Did you realize that textbook topics, such as health, food,<br/>
                  transportation, etc, are too broad and impractical? <br/>
                </td>
                <td className="border border-4 border-[#1E2B5E] p-5 text-[#1E2B5E] font-poppins">
                  Fortunately, Studrill has detailed daily conversation drills <br/>
                  and topics, allowing you to express yourself and engaging with <br/>
                  people
                </td>
              </tr>
              <tr>
                <td className="border border-4 border-[#1E2B5E] p-5 text-[#1E2B5E] font-poppins">
                  Then, you have to memorize too much vocabulary that is not <br/>
                  even used in your daily life.<br/>
                </td>
                <td className="border border-4 border-[#1E2B5E] p-5 text-[#1E2B5E] font-poppins">
                  With Studrill, you get a customized-to-topic Kanji and <br/>
                  Vocabulary that help you to express clearly and concisely. <br/>
                </td>
              </tr>
              <tr>
                <td className=" border border-4 border-[#1E2B5E] p-5 text-[#1E2B5E] font-poppins">
                  Again, you have got to learn new grammar patterns everyday <br/>
                  without even knowing how to use them in your daily life <br/>
                </td>
                <td className="border border-4 border-[#1E2B5E] p-5 text-[#1E2B5E] font-poppins">
                  But Studrill provides you with spoken grammar patterns that <br/>
                  are relevant to your daily life situations. <br/>
                </td>
              </tr>
              <tr>
                <td className="border border-4 border-[#1E2B5E] p-5 text-[#1E2B5E] font-poppins">
                  Again, you have got to learn new grammar patterns everyday <br/>
                  without even knowing how to use them in your daily life <br/>
                </td>
                <td className=" border border-4 border-[#1E2B5E] p-5 text-[#1E2B5E] font-poppins">
                  But Studrill provides you with spoken grammar patterns that <br/>
                  are relevant to your daily life situations. <br/>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}
