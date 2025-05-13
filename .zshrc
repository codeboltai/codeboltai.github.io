# Log fnm environment initialization
fnm_env_with_logging() {
  local log_file="$HOME/fnm_env.log"
  echo "$(date): Running fnm env" >> "$log_file"
  fnm env >> "$log_file" 2>&1
  eval "$(fnm env)"
}

# Replace the original command with our logging function
alias load_fnm='fnm_env_with_logging'

# Uncomment to automatically run on shell startup
# fnm_env_with_logging 