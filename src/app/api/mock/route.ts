import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
  const url = new URL(req.url);
  const searchParams = url.searchParams;
  const page = Number(searchParams.get("page"));
  const pageSize = Number(searchParams.get("pageSize"));
  const data: { id: string }[] = [];

  const pageStart = (page - 1) * pageSize;
  const pageEnd = pageStart + pageSize;

  for (let i = pageStart; i < pageEnd; i++) [data.push({ id: `${i}` })];
  console.log(data);

  return NextResponse.json(data);
};
