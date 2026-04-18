FROM rust:1.75-alpine AS builder

WORKDIR /build

RUN apk add --no-cache musl-dev openssl-dev

COPY Cargo.* ./
COPY src ./src
COPY migrations ./migrations

RUN cargo build --release

FROM alpine:latest

RUN apk add --no-cache ca-certificates

WORKDIR /app

COPY --from=builder /build/target/release/ark-mail /app/
COPY migrations ./migrations

EXPOSE 3000

CMD ["./ark-mail"]
