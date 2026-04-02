# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]
### Added
- Ability to export tally results as a `.csv` file.

## [1.2.0] - 2026-02-09
### Added
- **Dark Mode:** Added a system-aware dark mode toggle in the footer.
- **Custom Labels:** Users can now click the header of a tally column to rename it (e.g., change "Counter 1" to "Player Name").
- Added a "Reset All" confirmation modal to prevent accidental data loss during active sessions.

### Changed
- Increased the touch target size for `+` and `-` buttons to improve mobile usability.
- Updated the primary color palette to align with One Buffalo Labs branding.

### Fixed
- Fixed a critical bug where counters would reset to zero if the browser tab was refreshed (now syncs to `localStorage`).
- Fixed layout shifting when adding more than 4 counters on mobile screens.

## [1.1.0] - 2026-01-15
### Added
- **Sound Effects:** Added distinct audio cues for incrementing and decrementing (can be muted).
- **Keyboard Navigation:** Users can now use `ArrowUp` and `ArrowDown` to control the active counter.

### Changed
- Refactored the main `Counter` component to reduce unnecessary re-renders.
- Swapped the default font to *Inter* for better legibility at small sizes.

## [1.0.0] - 2025-12-01
### Added
- Initial release of Tally Pad.
- Core features: Create multiple counters, increment/decrement values, and remove counters.
- Basic responsive design for desktop and mobile browsers.
