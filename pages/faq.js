import FAQScreen from "../src/screens/FAQScreen";

export default FAQScreen;

export async function getServerSideProps() {
  const FAQ_API_URL =
    "https://gist.githubusercontent.com/omariosouto/0ceab54bdd8182cbd1a4549d32945c1a/raw/578ad1e8e5296fa048e3e7ff6b317f7497b31ad9/alura-cases-faq.json";
  const faq = await fetch(FAQ_API_URL)
    .then((serverAnswer) => {
      return serverAnswer.json();
    })
    .then((final) => {
      return final;
    });
  return {
    props: {
      faq,
    },
  };
}

// export default function FaqPage({ faq }) {
//   return (
//     <div>
//       <PageTitle>FAQ - Alura Case!</PageTitle>
//       <h1>Alura Cases - FAQ</h1>
//       <Link href="/">Home</Link>
//       <ul>
//         {faq.map(({ answer, question }) => (
//           <li key={question}>
//             <article>
//               <h2>{question}</h2>
//               <p>{answer}</p>
//             </article>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }
