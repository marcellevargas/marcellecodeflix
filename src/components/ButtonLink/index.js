import styled from "styled-components";

/**
 * style.a =>eu estou passando a tag <a>
 *           e com `styles{chave: valor}`
 *           a minha folha de estilo
 */
const Button = styled.a`
    color: var(--white);
    border: 1px solid var(--white);
    box-sizing: border-box;
    cursor: pointer;
    padding: 16px 24px;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    outline: none;
    border-radius: 5px;
    text-decoration: none;
    display: inline-block;
    transition: opacity 0.3s;

  &:hover,
  &:focus {
    opacity: 0.5;
  }
`;

export default Button;