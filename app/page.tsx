import { Card, CardContent, CardHeader, CardSubheader } from "@/components/card";
import { RegisterForm } from "@/components/forms/register";
import { NavBar, NavItem } from "@/components/navigation";
import { ThemeSwitcher } from "@/components/theming";

export default function Home() {
  return (
    <main>
      <NavBar title="baddit.life">
        <NavItem text="Home" href="/" />
        <ThemeSwitcher />
      </NavBar>

      <div className="flex items-center justify-center">
        <Card className="m-12 w-1/3">
          <CardHeader title="Create an account" />
          <CardSubheader subheader="Start posting on baddit today by creating an account" />
          <CardContent className="mt-2">
            <RegisterForm />
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
