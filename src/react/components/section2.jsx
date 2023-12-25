const items = [
  { title: "Reaction", over: 80 },
  { title: "Memory", over: 92 },
  { title: "Verbal", over: 61 },
  { title: "Visual", over: 72 },
];

export default function Section2() {
  const ListItem = items.map((item) => {
    const { title, over } = item;
    return (
      <li>
        <div className="col">
          <div className="icon"></div>
          {title}
        </div>
        <div className="col">
          {over}
          <span>/100</span>
        </div>
      </li>
    );
  });

  return (
    <section className="sec2">
      <div>
        <h2>Summary</h2>
        <ul>{ListItem}</ul>
      </div>
      <button>Continue</button>
    </section>
  );
}
