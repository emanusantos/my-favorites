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
  }

  .content {
    display: flex;
    gap: 8rem;
    padding: 2rem 0;
  }

  .filters {
    background-color: #fff;
    height: 25rem;
  }

  .heros {
    display: flex;
    flex-wrap: wrap;
    width: auto;
    height: auto;
    padding: 1rem;
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