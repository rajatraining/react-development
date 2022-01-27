function LoopSample()
{
    const RenderList = props => {
        const animals = [
          { id: 1, animal: "Dog" },
          { id: 2, animal: "Bird" },
          { id: 3, animal: "Cat" },
          { id: 4, animal: "Mouse" },
          { id: 5, animal: "Horse" }
        ];
    }

    return (
        <ul>
          {/* {animals.map(item => (
            <li key={item.id}>{item.animal}</li>
          ))} */}
        </ul>
      );
}

export default LoopSample;