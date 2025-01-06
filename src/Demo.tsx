import React, { useRef } from 'react';
import './style.css';

const ExampleComponent: React.FC = () => {
  const h1Refs = Array.from({ length: 12 }, () =>
    useRef<HTMLHeadingElement>(null)
  );

  return (
    <div className="print-content">
      {h1Refs.map((h1Ref, index) => (
        <>
          <h1 key={index} className="print-heading" ref={h1Ref}>
            Example Heading {index + 1}
          </h1>
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there isn't anything embarrassing hidden in the
            middle of text. All the Lorem Ipsum generators on the Internet tend
            to repeat predefined chunks as necessary, making this the first true
            generator on the Internet. It uses a dictionary of over 200 Latin
            words, combined with a handful of model sentence structures, to
            generate Lorem Ipsum which looks reasonable. The generated Lorem
            Ipsum is therefore always free from repetition, injected humour, or
            non-characteristic words etc
            If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
          </p>
        </>
      ))}
      <button onClick={() => window.print()}>Print</button>
    </div>
  );
};

export default ExampleComponent;
