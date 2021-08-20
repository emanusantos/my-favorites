import styled from "styled-components";

const Container = styled.div`
  padding: 1rem 10rem;

  p {
    font-size: 1.5rem;
  }

  input {
    width: 100%;
    padding: .5rem;
    border: none;
    background-color: transparent;
    outline: none;

    &::placeholder {
      font-style: italic;
    }
  }

  .search {
    display: flex;
    align-items: center;
    border-bottom: .1rem solid #EBEBEB;
  }

  .content {
    display: flex;
    padding: 2rem 0;
  }

  .filters {
    background-color: #fff;
    width: 10rem;
    height: 25rem;
  }
`;

export default Container;