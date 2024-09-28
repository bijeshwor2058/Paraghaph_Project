import { useState } from "react";
import styles from "./content.module.css";
import Text_Content from './Text.json'
const Content = () => {
  const [paragraphs, setParagraphs] = useState([]);
  const generateParagraphs = (e) => {
    e.preventDefault();

    const number = parseInt(document.getElementById("number").value);

    if(number > 8){
      alert("Please enter a number less than or equal to 8");
      return;
    }

    const selectedParagraph = Text_Content.slice(0, number);
    setParagraphs(selectedParagraph);
    
  }
  return (
    <div className={styles.container}>
      <div>
        <h3>tired of boring lorem ipsum?</h3>
        <form action="">
        <label className={styles.para}>Paragraphs:</label>
          <input type='number' id="number"/>
          <button onClick={generateParagraphs} >GENERATE</button>
        </form>
        <section>
          {
            paragraphs.map((text,index) =>(
              <p key={index + "txt"} className={styles.lorem}> {text.Text} </p>
            ) )
          }
        </section>
      </div>
    </div>
  );
};
export default Content;
