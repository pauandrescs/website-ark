FROM rust:1.82-bullseye AS builder

WORKDIR /build

COPY Cargo.* ./
COPY src ./src
COPY migrations ./migrations

RUN cargo build --release

FROM debian:bookworm-slim

RUN apt-get update && apt-get install -y ca-certificates libssl3 && rm -rf /var/lib/apt/lists/*

WORKDIR /app

COPY --from=builder /build/target/release/ark-mail /app/
COPY migrations ./migrations

EXPOSE 3000

CMD ["./ark-mail"]
