workflow "Lint your PRs" {
  on = "pull_request"
  resolves = "PR Lint Action"
}

action "PR Lint Action" {
  uses = "vijaykramesh/pr-lint-action@master"
  secrets = ["GITHUB_TOKEN"]
}
