export default function Button(props: ICrmButton) {
  const { variant, children } = props;

  return <button className={`bg-crm-primary px-20 py-8 rounded-md crm-button`}>{children}</button>;
}
