"use client";
import { useParams } from "next/navigation";
import React from "react";

export default function page() {
  const params = useParams();

  return <p>participante page {params.eventId}</p>;
}
