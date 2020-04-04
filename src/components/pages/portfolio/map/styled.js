import styled from "styled-components"

export const MapWrapper = styled.div`
  &,
  .map,
  .map-base {
    height: 100%;
  }

  .icon-marker {
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    color: white;
    width: 3.6em;
    height: 3.6em;
    font-size: 0.7em;
    font-weight: bold;
    background-color: #c62828;
    border-radius: 100%;
    box-shadow: 0 2px 5px rgba(black, 0.9);

    &:hover {
      .icon-marker-tooltip {
        display: block;
      }
    }
  }

  .icon-marker-tooltip {
    display: none;
    position: absolute;
    bottom: 100%;
    width: 16em;
    font-size: 1.4em;
    padding: 1em;
    background-color: #263238;
    border-radius: 0.4em;
    margin-bottom: 1em;
    box-shadow: 0 3px 5px rgba(black, 0.9);

    h2 {
      color: white;
      font-size: 1.5em;
      line-height: 1.2;
      margin-bottom: 0.1em;
      margin-top: 0;
    }

    ul {
      list-style: none;
      padding: 0;
      margin: 0.6em 0 0;
    }
  }
`
