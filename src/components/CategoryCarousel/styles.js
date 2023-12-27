import { Link } from 'react-router-dom'
import styled from 'styled-components'
export const Container = styled.div`
  background-color: #efefef;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 35px;
  padding: 35px 0;

  .rec.rec-arrow {
    background: #9758a6;
    color: #eeeeee;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }
  .rec.rec-arrow:hover {
    border: 2px solid #9758a6;
    background-color: #eeeeee;
    color: #9758a6;
  }

  .rec.rec-arrow:disabled {
    border: none;
    background-color: #bebebf;
    color: #eeeeee;
  }
`

export const CategoryImg = styled.img``

export const ContainerItems = styled.div`
  display: flex;
  flex-direction: column;
`

export const Button = styled(Link)`
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 16px;
  background: #9758a6;
  color: #eeeeee;
  height: 50px;
  border: none;
  border-radius: 8px;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: 100%;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.6;
  }
`

export const Image = styled.img`
  width: 200px;
  border-radius: 10px;
`
