function Processor({ filters, updateCheckboxFilter }) {
  return (
    <div>
      <h4 className="processor-title">Processor</h4>
      <div className="processor-div mt-2">
        <div className="processor-choice-div">
          <input
            type="checkbox"
            id="Intel Core i5"
            name="Intel Core i5"
            value="Intel Core i5"
            checked={filters.processor.includes("Intel Core i5")}
            onChange={(e) =>
              updateCheckboxFilter(
                "processor",
                e.target.value,
                e.target.checked,
              )
            }
          />
          <label htmlFor="Intel Core i5">Intel Core i5</label>
        </div>
        <div className="processor-choice-div">
          <input
            type="checkbox"
            id="Intel Core i7"
            name="Intel Core i7"
            value="Intel Core i7"
            checked={filters.processor.includes("Intel Core i7")}
            onChange={(e) =>
              updateCheckboxFilter(
                "processor",
                e.target.value,
                e.target.checked,
              )
            }
          />
          <label htmlFor="Intel Core i7">Intel Core i7</label>
        </div>
        <div className="processor-choice-div">
          <input
            type="checkbox"
            id="Intel Core i9"
            name="Intel Core i9"
            value="Intel Core i9"
            checked={filters.processor.includes("Intel Core i9")}
            onChange={(e) =>
              updateCheckboxFilter(
                "processor",
                e.target.value,
                e.target.checked,
              )
            }
          />
          <label htmlFor="Intel Core i9">Intel Core i9</label>
        </div>
        <div className="processor-choice-div">
          <input
            type="checkbox"
            id="amdryzen3"
            name="AMD Ryzen 3"
            value="AMD Ryzen 3"
            checked={filters.processor.includes("AMD Ryzen 3")}
            onChange={(e) =>
              updateCheckboxFilter(
                "processor",
                e.target.value,
                e.target.checked,
              )
            }
          />
          <label htmlFor="amdryzen3">AMD Ryzen 3</label>
        </div>
        <div className="processor-choice-div">
          <input
            type="checkbox"
            id="amdryzen5"
            name="AMD Ryzen 5"
            value="AMD Ryzen 5"
            checked={filters.processor.includes("AMD Ryzen 5")}
            onChange={(e) =>
              updateCheckboxFilter(
                "processor",
                e.target.value,
                e.target.checked,
              )
            }
          />
          <label htmlFor="amdryzen5">AMD Ryzen 5</label>
        </div>
        <div className="processor-choice-div">
          <input
            type="checkbox"
            id="amdryzen7"
            name="AMD Ryzen 7"
            value="AMD Ryzen 7"
            checked={filters.processor.includes("AMD Ryzen 7")}
            onChange={(e) =>
              updateCheckboxFilter(
                "processor",
                e.target.value,
                e.target.checked,
              )
            }
          />
          <label htmlFor="amdryzen7">AMD Ryzen 7</label>
        </div>
        <div className="processor-choice-div">
          <input
            type="checkbox"
            id="amdryzen9"
            name="AMD Ryzen 9"
            value="AMD Ryzen 9"
            checked={filters.processor.includes("AMD Ryzen 9")}
            onChange={(e) =>
              updateCheckboxFilter(
                "processor",
                e.target.value,
                e.target.checked,
              )
            }
          />
          <label htmlFor="amdryzen9">AMD Ryzen 9</label>
        </div>
        <div className="processor-choice-div">
          <input
            type="checkbox"
            id="applem1"
            name="Apple M1"
            value="Apple M1"
            checked={filters.processor.includes("Apple M1")}
            onChange={(e) =>
              updateCheckboxFilter(
                "processor",
                e.target.value,
                e.target.checked,
              )
            }
          />
          <label htmlFor="applem1">Apple M1</label>
        </div>
        <div className="processor-choice-div">
          <input
            type="checkbox"
            id="applem2"
            name="applem2"
            value="Apple M2"
            checked={filters.processor.includes("Apple M2")}
            onChange={(e) =>
              updateCheckboxFilter(
                "processor",
                e.target.value,
                e.target.checked,
              )
            }
          />
          <label htmlFor="applem2">Apple M2</label>
        </div>
      </div>
    </div>
  );
}

export default Processor;
