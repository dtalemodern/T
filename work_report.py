# Work Report Generator


def ask_questions():
    task = input('What tasks did you complete today? ')
    challenges = input('What challenges did you face? ')
    return task, challenges


def generate_report(task, challenges):
    report = (
        "Today's Work Report\n"
        "-------------------\n"
        f"Tasks Completed: {task}\n"
        f"Challenges Faced: {challenges}\n"
    )
    return report


def main():
    task, challenges = ask_questions()
    report = generate_report(task, challenges)
    with open('report.txt', 'w') as f:
        f.write(report)
    print('\nGenerated Report:\n')
    print(report)
    print('\nReport saved to report.txt')


if __name__ == '__main__':
    main()
