
export default function Footer() {
    const year = new Date().getFullYear()

    return <footer className="border-t py-6 text-center text-sm text-muted-foreground">
      <p>
        © {year} Stian
      </p>
    </footer>
}
