import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
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
    width: 90%;
  }

  .content {
    display: flex;
    padding: 2rem 0;
  }

  .filters {
    display: flex;
    flex-direction: column;
    font-style: italic;
    padding: 3rem 2rem;
    background-color: #e2e2e2;
    border-radius: 1rem;
    box-shadow: 0px 3px 25px #00000014;
    max-width: 14rem;
    max-height: 15rem;
    width: 100%;

    p {
      margin-bottom: 1rem;
    }

    .filter {
      display: flex;
      justify-content: space-between;
      padding: .2rem;
      width: 100%;
    }

    label {
      display: block;
    }

    input {
      display: inline-block;
      width: auto;
    }
  }

  .heros {
    display: flex;
    flex-wrap: wrap;
    width: auto;
    height: auto;
    padding: 1rem 2rem;
  }

  .pageChange {
    align-self: center;
    display: flex;
    justify-content: space-between;
    gap: 1.5rem;

    #next, #previous {
      cursor: pointer;
      
      &:hover {
        transform: scale(1.5);
        transition-duration: .5s;
      }
    }
  }
`;

export default Container;