// ファイルパス: app/not-found.tsx
import { PageContainer } from "@/components/PageContainer";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <PageContainer>
      <div className="flex flex-col items-center justify-center text-center">
        <h1 className="text-8xl font-extrabold text-teal-400">404</h1>
        <h2 className="mt-4 text-3xl font-bold text-zinc-100">
          ページが見つかりませんでした
        </h2>
        <p className="mt-4 max-w-md text-zinc-400">
          お探しのページは、削除されたか、名前が変更されたか、あるいは一時的に利用できない可能性があります。
        </p>
        <div className="mt-8">
          <Button href="/">
            トップページに戻る
          </Button>
        </div>
      </div>
    </PageContainer>
  );
}